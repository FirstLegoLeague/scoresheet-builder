var fs = require('fs');
var parse = require('xml2js').parseString;
var beautify = require('js-beautify').js_beautify;
var fn = process.argv[2];
var fnMap = {};
var strings;

processFile(fn);

function getString(key) {
    return strings[key]||key;
}

function parseObjectiveAmount(objective) {
    if (objective.$type === 'objective-enum') {
        var amounts = objective.option
          .map(opt => ({ [opt.$.name]: Number(opt.$['resource-use'] || 0) }))
          .reduce((obj, entry) => Object.assign(obj, entry), {})

        return `(${JSON.stringify(amounts)}[${jsName(objective.$.id)}])`
    } else if (objective.$type === 'objective-number') {
        return `(${jsName(objective.$.id)} * ${objective.$['resource-use'] || 1})`
    } else if (objective.$type === 'objective-yesno') {
        return `((${jsName(objective.$.id)} === 'yes') ? ${objective.$['resource-use'] || 1} : 0)`
    } else {
        new Error('Objective don\'t support resources')
    }
}

function parseResources(xml) {
    return xml.resources[0].resource.map(resource => {
        const objectives = xml.mission
          .map(m => Object.keys(m)
            .filter(k => k.startsWith('objective-'))
            .map(k => m[k].map(obj => Object.assign({ $type: k }, obj)))
            .reduce((arr, item) => arr.concat(item), [])
          )
          .reduce((arr, item) => arr.concat(item), [])
          .filter(obj => obj.$.resource === resource.$.name)

        return {
            [resource.$.name]: {
                args: objectives.map(obj => jsName(obj.$.id)),
                code: `if (${objectives.map(parseObjectiveAmount).join(' + ')} > ${resource.$.quota}) ` +
                  `{ return new Error('${resource.message}') }`
            }
        }
    })
      .reduce((obj, entry) => Object.assign(obj, entry), {})
}

/* parse the case element */
function parseCondition(xml) {
    var obj = {
        values: xml['index-ref'].map(function(index) {
            return index.$.value;
        })
    };
    if (xml.points) {
        obj.points = xml.points[0].$.amount;
        obj.returnValue = obj.points;
    }
    if (xml.percentage) {
        obj.percentage = xml.percentage[0].$.amount;
        obj.returnValue = obj.percentage/100;
    }
    if (xml.error) {
        obj.error = getString(xml.error[0].$.message);
        obj.returnValue = 'new Error("'+jsEscape(obj.error)+'")';
    }
    return obj;
}

function parseScore(xml, resources) {
    var deps = xml.indexes[0].index.map(function(index) {
        return jsName(index.$.objective);
    });
    var lines = resources.map(r => r.code)
      .concat(xml.cases[0].case.map(parseCondition).map(function(line) {
        var conditions = line.values.map(function(value,index) {
            return deps[index] + ' === \'' + value + '\'';
        }).join(' && ');

        return 'if ('+conditions+') {return '+line.returnValue+'}';
    }))
      .join('\n');
    var args = unique(deps.concat(...resources.map(r => r.args))).join(',');
    return 'function('+args+') {'+lines+'}';
}

function parseObjective(xml) {
    var obj = {};
    obj.id = jsName(xml.$.id);
    obj.title = getString(xml.$.description);
    if (xml.option) {
        obj.options = xml.option.map(function(opt) {
            return {
                value: jsName(opt.$.name),
                title: getString(opt.$.description)
            };
        });
    }
    if (obj.title.length===1) {obj.title = obj.title[0];}
    obj.type = xml.$.type;
    if (xml.$.min!==undefined) {obj.min = xml.$.min;}
    if (xml.$.max!==undefined) {obj.max = xml.$.max;}
    return obj;
}

function parseMission(xml,index, resources) {

    //only return elements starting with 'objective-''
    var objectives = Object.keys(xml).filter(function(key) {
        return (key.indexOf('objective-') === 0);
    }).reduce(function(all,key) {
        return all.concat(xml[key].map(function(objective) {
            objective.$.type = key.replace('objective-','');
            return objective;
        }));
    },[]);

    var missionResources = objectives
      .filter(obj => obj.$.resource)
      .map(obj => resources[obj.$.resource])

    var score = xml.score.map(s => parseScore(s, missionResources));
    var scoreKey = '@@@'+index+'@@@';
    fnMap[scoreKey] = '['+score.join(',')+']';

    return {
        title: getString(xml.$.name),
        description: getString(xml.$.description),
        objectives: objectives.map(parseObjective),
        score: scoreKey
    };
}

function parseString(obj,xml) {
    obj[xml.$.id] = xml._.trim();
    return obj;
}

function jsEscape(str) {
    return JSON.stringify(str).replace(/^"|"$/g,'');
}

function jsName(str) {
    return str.replace(/[^0-9a-z$_]/gi,'_');
}

function unique(arr) {
    var map = {};
    arr.forEach(function(item) {
        map[item] = 1;
    });
    return Object.keys(map);
}

function toObj(arr,key) {
    var res = {};
    arr.forEach(function(item) {
        res[item[key]] = item;
        delete item[key];
    });
    return res;
}

function processFile(fn) {
    var xml = fs.readFileSync(fn,'utf8');
    parse(xml,function(err,def) {
        const rtl = def['fll:challenge'].strings[0].$.rtlDoc === "true";
        strings = def['fll:challenge'].strings[0].string.reduce(parseString,{});
    // console.log(strings);
    // return;
        var resources = parseResources(def['fll:challenge'])

        var missions = def['fll:challenge'].mission;

        // console.log(missions);
        var jsm = {
            title: def['fll:challenge'].$.name,
            missions: missions.map((m, i) => parseMission(m, i, resources)),
            strings: strings,
            rtl: rtl
        };
        var json = JSON.stringify(jsm,null,4);
        //replace funtion keys with actual function body
        json = json.replace(/"(@@@.*?@@@)"/g,function($0,$1) {
            return fnMap[$1];
        });

        //beautify
        json = beautify(json, { indent_size: 4 });
        console.log(`(${json})`);

        // var fn = 'missions/'+def.fll.season[0].$.year+'.js';
        // fs.writeFileSync(fn,json);

        // console.log(json);
    });
}
