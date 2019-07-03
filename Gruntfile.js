
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jsChallenge: {
            options: {

            },
            files: {
                src: 'challenges/xml/*.xml',
                dest: 'challenges/js/'
            }
        }
    });

    grunt.registerTask('js', ['jsChallenge']);

    grunt.registerMultiTask('jsChallenge', function() {
        var npath = require('path');
        var Q = require('q');
        var done = this.async();
        var exec = require('child_process').exec;

        function process(filepath,dest) {
            return Q.promise(function(resolve,reject) {
                var cmd = [
                    'node',
                    '"tools/    buildchallenge.js"',
                    '"' + filepath + '"',
                    '>',
                    '"' + dest + '"'
                ].join(' ');

                // console.log(cmd);
                // resolve()
                exec(cmd, function(error, stdout, stderr) {
                    if (error !== null) {
                        console.log('exec error: ' + error);
                        reject(error);
                    }
                    resolve();
                });
            });
        }

        this.files.forEach(function(f) {
            f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                return function() {
                    var base = npath.basename(filepath, '.xml');
                    var dest = npath.resolve(f.dest, base) + '.js';
                    // console.log(filepath);
                    // console.log(dest);
                    return process(filepath,dest);
                };
            }).reduce(function(pending,promise) {
                return pending.then(promise);
            },Q()).then(done,done);
        });
    });

    // Default task(s).
    grunt.registerTask('default', ['jsChallenge']);

};
