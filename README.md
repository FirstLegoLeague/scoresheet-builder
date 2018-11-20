# scoresheet-builder

Code to build scoresheet from xml file

## Usage

Temporary method until this is integrated properly

1. Copy xml file into scoresheet-builder/challenges/xml
1. Run grunt js. We only use the Javascript file currently and so it's only necessary to build that.
1. Copy the missions default code from `2018_US.js` into the new javascript file
    1. This is necessary as the grunt code doesn't currently generate the default code.
    1. I use BeyondCompare for this
    1. For each objective add a comma after the `type` value, and the default key and value (usually `no` or `none` or `0`)
1. Commit and push the new .xml and .js files.
1. Copy the two new files into ../scoring/challenges/xml and ../scoring/challenges/js
1. Stage and commit the two new files to a new branch (e.g. russian-scoresheet).
1. In `scoring/module.yml` add the new language to `config/fields/name:language/values`. Maintain alphabetical order.
1. Test
1. Stage and commit `module.yml`, and create PR

##Contributing

To contribute to this repository, please make a fork, make your changes and submit a pull request.

This way of work allows us to maintain proper code quality, which is important when working with a large amount of people on the same project. Feel free to join the discussion on the [issues page](https://github.com/FirstLegoLeague/scoring/issues)

The best way to work on a feature or a bug is to follow these steps:

- fork the repository to your own github account
- if already forked, make sure your fork is up to date with the base repo
- create a new branch for your feature or bugfix
- work
- test
- create a pull request to merge your development branch into a branch in the base repo
- we will review your pull request, when ok, we will merge it into master

In your own fork, you can create any branch structure you like, however, some best practices / tips are:

- use [git flow](https://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) to structure your branches
- keep pull requests small and concise. Try to limit a pr to only one feature / bug fix. We'd rather have many small pull requests than one large one
- keep your fork up to date with the base repo on a regular basis, by rebasing against it. This makes sure your pull requests will merge nicely

## Development

This repo uses npm and not yarn

### Prerequisites

- nodejs [nodejs.org](http://nodejs.org). Make sure you have a recent version (>6) to get npm version >3.
- grunt (`npm install -g grunt-cli`)

Note: grunt is installed in this repo but the grunt-cli is required to be installed globally. See [How the CLI works](https://gruntjs.com/getting-started#how-the-cli-works)

### Steps

- Clone the repository
- `npm install`

### Building when XML definition files have changed:

- run `grunt challenge`

This will rebuild html, pdf and js versions of the challenge. This can also be done individually if you'd wish:

- run `grunt html`
- run `grunt pdf`
- run `grunt js`

These files are also included in the repo: `challenges/html`, `challenges/pdf`, `challenges/js`

## Documentation

- [original proposal](docs/proposal/Scoring System project proposal-v2.pdf)
- [architecture documents](docs/architecture/readme.md)
- [templating](docs/templating/readme.md)
- [interface](docs/user_interface/readme.md)
- [internationalization](docs/i18n/readme.md)

## License

This projected is licensed under the terms of the [GNU GPL v2.0 licenses](https://raw.githubusercontent.com/FirstLegoLeague/fllscoring/master/LICENSE.txt)

Basically, it allows users to legally copy, distribute and modify software. This means you can:
* Copy it onto your own servers, your client’s servers, your own computer, pretty much anywhere you want. There’s no limit to the number of copies you can make.
* Provide a download link on your website. Put the software on a bunch of thumb drives and give them away. Print out the source code and throw it from the rooftops (please don’t, though, because that would waste a lot of paper and make a mess).
Charge a fee to distribute the software.
* If you want to charge someone to provide the software, set it up on their website or do anything else related to it, you can do so. But, you must give them a copy of the GNU GPL, which basically tells them that they could probably get the software elsewhere for free. Best to be up front about that, and about why you’re charging them.
* If you want to add or remove functionality, go ahead. If you want to use a portion of the code in another project, you can. The only catch is that the other project must also be released under the GPL. Ideally we would want you to share your improvements back with us on this GitHub.
* We welcome your feedback but please remember that this software comes with no guarantees. We are dedicated volunteer and experienced software developers and will do our best make sure we make a valuable and reliable contribution to the community. However the use of this software is at your own risk.

## Authors

- [Rikkert Koppes](mailto:rikkert@rikkertkoppes.com)
- [Kenny Meesters](mailto:k.meesters@gmail.com)
