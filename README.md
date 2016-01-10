# Modern Web Dev Generator

[![NPM version](https://img.shields.io/npm/v/generator-modern-web-dev.svg)](https://www.npmjs.com/package/generator-modern-web-dev)
[![Downloads](https://img.shields.io/npm/dm/generator-modern-web-dev.svg)](https://www.npmjs.com/package/generator-modern-web-dev)
[![Build Status](https://secure.travis-ci.org/dsebastien/modernWebDevGenerator.png?branch=master)](https://travis-ci.org/dsebastien/modernWebDevGenerator)
[![Coverage Status](
https://coveralls.io/repos/dsebastien/modernWebDevGenerator/badge.svg?branch=master&service=github
)](
https://coveralls.io/github/dsebastien/modernWebDevGenerator?branch=master
)
[![Dependency Status](https://david-dm.org/dsebastien/modernWebDevGenerator.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevGenerator)
[![devDependency Status](https://david-dm.org/dsebastien/modernWebDevGenerator/dev-status.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevGenerator#info=devDependencies)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-green.svg?style=flat)](https://gitter.im/dsebastien/modernWebDevGenerator?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![License](https://img.shields.io/cocoapods/l/AFNetworking.svg)](LICENSE.MD)

## About
ModernWebDevGenerator is a [Yeoman](http://yeoman.io/) generator that will help you quickly get up and running with [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild).

Projects created with this Yeoman Generator will be able to directly leverage the awesome Gulp-based build provided by the [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild) project, which includes many tasks and features out of the box (e.g., transpilation of TypeScript/ES2015 to ES5, SASS transpilation to CSS, Minification, Bundling, Code quality & code style checks, Sourcemaps, support for unit testing, ...).

This project comes with a fully working Angular 2 configuration.

This generator includes all the folders & files listed by [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild) as mandatory as well as the recommended ones so as to promote good practices. README.md files are placed in multiple locations to describe what to put where, provide some guidance/design guidelines, ...

The generated projects also include:
* a working setup of Angular 2 (this might later move to a separate sub-generator)
  * a root component (app/core/boot.ts)
  * a home page (app/pages/home.ts)
  * a basic component router configuration
* a good [HTML5 boilerplate](https://html5boilerplate.com/)
* a good SASS & styling starting point
* an embedded folder structure and design guidelines (componentization, separation of concerns, naming conventions, ...)
* a set of TypeScript code style/quality rules (tshint.json)
* a set of ES2015 compliant code style/quality rules (.jscsrc and .jshintrc)
* ...

The general idea is that you can remove anything you don't need assuming it's not in the list of mandatory folders/files of [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild) (otherwise you'll break the build ^^).

Any feedback/contributions are welcome to improve the project so don't hesitate!

This project is available as an NPM package; check out the usage instructions below.

## Demo
Click on this link to see a demo of how to install & use this project and the modern web dev build:
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Wc5iTInYOBw
" target="_blank"><img src="http://img.youtube.com/vi/Wc5iTInYOBw/0.jpg"
alt="ModernWebDev Build and Generator Demo" width="240" height="180" border="10" /></a>

## Background
Please note that this project is heavily inspired from:
* Google's [Web Starter Kit](https://github.com/google/web-starter-kit)
* [HTML5 Boilerplate](https://html5boilerplate.com/)
* Brad Frost's [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design)
* Nicolas Gallagher's [SUIT CSS](https://github.com/suitcss)
* Countless blog articles
  * [Dan Walhin](https://twitter.com/DanWahlin)'s TypeScript posts & course)
	* [Introduction to TypeScript](https://www.edx.org/course/introduction-typescript-microsoft-dev201x-0)
  * A gazillion Gulp articles
* Many others I'm forgetting :(

## Status & roadmap
Check out the issues & labels to get an idea of what's next.
For existing features, refer to the previous sections.

Check out the [change log](CHANGELOG.MD)

## Usage
In order to use this generator you first need to install Yeoman:

```bash
npm install --global yo
```

Once Yeoman is installed, you can install this generator:

```bash
npm install --global generator-modern-web-dev
```

You will also need to install gulp globally:
```bash
npm install --global gulp
```

Create a new folder, go into it then invoke the generator by running the following command:
```bash
yo modern-web-dev
```

Once you've answered all the questions, the generator will do its thing.
Once done, you'll be able to run the development web server and start hacking away using:
```bash
npm run serve
```

Enjoy!

Note that the [ModernWebDevBuild](https://www.npmjs.com/package/modern-web-dev-build) project has other tricks in store for you; be sure to check out [the docs](https://www.npmjs.com/package/modern-web-dev-build).

## Options
There are two main approaches to use this generator:
* interactive mode: the generator asks you all the questions
* batch mode: you provide the information directly to the generator

In practice nothing prevents you from mixing both though :)
If you pass a setting directly to the generator, it will not prompt you for that value.

You can list all the options with a brief description using `yo modern-web-dev --help`.

By default, the generator will install all project dependencies (not the global requirements listed in the 'Usage' section!). You can skip the installation of the project dependencies by passing the `--skip-install` option.

The generator will check for updates once in a while but you can disable the update check by passing the following flag: `--no-update-notifier`.

## Generated projects dev dependencies
* [gulp](http://gulpjs.com/): JavaScript task runner
* [babel](https://babeljs.io/): ES2015 to ES5 transpiler. Needed so that the Gulp configuration file can be written using ES2015 (gulpfile.babel.js)
* [nodemon](https://www.npmjs.com/package/nodemon): monitoring of certain files (used by npm scripts defined in package.json): https://www.npmjs.com/package/nodemon

## Generated projects runtime dependencies
The following dependencies are managed by JSPM (in the JSPM section of the package.json file):
* [Angular 2](https://angular.io/)
* [RxJS](https://github.com/Reactive-Extensions/RxJS): Reactive Extensions. Forget about Promises and use Observable, the future of async in JavaScript!
* normalize.css: Nicolas Gallagher's Normalize CSS (alternative to CSS resets): https://www.npmjs.com/package/normalize.css

## Generated projects configuration files
The project includes multiple configuration files.

For more details about the configuration files, check out the [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild)'s documentation.

Here's some high level information about these:
* .babelrc: Babel configuration file
* gulpfile.babel.js: gulp's configuration file. This is where the Modern Web Dev Build tasks are loaded
* package.json: NPM's configuration file. This is where all dependencies are defined: project ones under 'jspm' and build-related ones under 'devDependencies' (more information: https://docs.npmjs.com/files/package.json)
* .dockerignore: files that are ignored by Docker when creating images
* .editorconfig: helps configure code style for various text editors (more information here: http://editorconfig.org)
* .gitattributes: allows to define git attributes per path (more information here: http://git-scm.com/docs/gitattributes)
* .gitignore: configures files/folders that are ignored by git
* .jscsrc: configuration file for JSCS. It defines the JS code style (more information: http://jscs.info/overview.html#options)
  * note that it is configured to use ES Next (ES2015+)
  * rules reference: http://jscs.info/rules.html
  * news: https://github.com/jscs-dev/node-jscs/blob/master/CHANGELOG.md
* .jshintrc: JSHint configuration
  * rules reference: http://jshint.com/docs/options
  * more information: http://jshint.com/docs/)
* .jshintignore: stuff that JSHint should ignore
* .travis.yml: Travis CI configuration files (more information: http://docs.travis-ci.com/user/build-configuration/)
* Dockerfile and DockerfileDev: Docker configuration files used to describe how Docker images should be created for this project (more information: https://www.docker.com/ and http://docs.docker.com/reference/builder/)
* jspm.conf.js: JSPM/SystemJS configuration file
* karma.conf.js: Karma test runner configuration file
* runOnDocker.sh and runDevOnDocker.sh: build scripts that create/run Docker images
* tsconfig.json: TypeScript compiler configuration. Contains all compiler options, code style rules and file selection/exclusion rules (bypassed by the gulp-typescript plugin!)
  * http://json.schemastore.org/tsconfig
  * https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
* typings.json: typings configuration file: list of TypeScript type definitions files to retrieve
* tslint.json: TypeScript code style configuration (more information: https://www.npmjs.com/package/tslint)
* Makefile: for \*NIX afficionados

## Adding project dependencies
As you go along, you'll surely need to add new dependencies for your application. If the dependency you want to add is required at runtime, then you should use JSPM to add it.
Installing a dependency with JSPM is as simple as `jspm install x`. For more information about JSPM, check out the official site: http://jspm.io/

## Contributing
Take a look at the project's open [issues](https://github.com/dsebastien/modernWebDevGenerator/issues) and [milestones](https://github.com/dsebastien/modernWebDevGenerator/milestones).

If you know what to do then:
* Fork the project
* Create a feature branch in your fork
* Rebase if needed to keep the project history clean
* Commit your changes & push to GitHub
* Try and flood me with pull requests :)

## Building from source
If you want to build from source, you need to:
* install NodeJS (4.2+) and npm (3+)
* clone this git repository
* install gulp: `npm install --global gulp`
* run `npm run setup`
* start hacking :)

## Releasing a version
* commit all changes to include in the release
* edit the version in package.json
  * respect semver
* update CHANGELOG.MD
* commit
* git tag <version>
* git push --tags
* draft the release on GitHub (add description, etc)
* npm publish

## Authors
### Sebastien Dubois
* [@Blog](https://www.dsebastien.net)
* [@Twitter](https://twitter.com/dSebastien)
* [@GitHub](https://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
