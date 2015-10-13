# Modern Web Dev Generator

[![Build Status](https://secure.travis-ci.org/dsebastien/modernWebDevGenerator.png?branch=master)](https://travis-ci.org/dsebastien/modernWebDevGenerator)
[![Coverage Status](https://img.shields.io/coveralls/dsebastien/modernWebDevGenerator.svg?style=flat)](https://coveralls.io/r/dsebastien/modernWebDevGenerator?branch=master)
[![Dependency Status](https://david-dm.org/dsebastien/modernWebDevGenerator.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevGenerator)
[![devDependency Status](https://david-dm.org/dsebastien/modernWebDevGenerator/dev-status.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevGenerator#info=devDependencies)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-green.svg?style=flat)](https://gitter.im/dsebastien/modernWebDevGenerator?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![License](https://img.shields.io/cocoapods/l/AFNetworking.svg)](LICENSE.MD)

## About
ModernWebDevGenerator is a [Yeoman](http://yeoman.io/) generator that will help you quickly get up and running with [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild).

Projects created with this Yeoman Generator will be able to directly leverage the awesome Gulp-based build provided by the [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild) project, which includes many tasks and features out of the box (e.g., transpilation of TypeScript/ES2015 to ES5, SASS transpilation to CSS, Minification, Bundling, Code quality & code style checks, Sourcemaps, ...).

This generator includes all the folders & files listed by ModernWebDevBuild as mandatory as well as the recommended ones so as to promote good practices. README.md files are placed in multiple locations to describe what to put where, provide some guidance/design guidelines, ...

The generated projects also include:
* a working setup of Angular 2 (this might later move to a separator sub-generator)
* a good [HTML5 boiletplate](https://html5boilerplate.com/)
* a good SASS & styling starting point & embedded design guidelines
* nice Apache server configs

The general idea is that you can remove anything you don't need assuming it's not in the list of mandatory folders/files of [ModernWebDevBuild](https://github.com/dsebastien/modernWebDevBuild) (otherwise you'll break the build ^^).

Any feedback/contributions are welcome to improve the project so don't hesitate!

This project is available as an NPM package; check out the usage instructions below.

## Background
Please note that this project is heavily inspired from:
* Google's [Web Starter Kit](https://github.com/google/web-starter-kit)
* [HTML5 Boiletplate](https://html5boilerplate.com/)
* Brad Frost's [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design)
* Nicolas Gallagher's [SUIT CSS](https://github.com/suitcss)
* Countless blog articles
  * [Dan Walhin](https://twitter.com/DanWahlin)'s TypeScript posts & course)
	* [Introduction to TypeScript](https://www.edx.org/course/introduction-typescript-microsoft-dev201x-0)
  * A gazillion Gulp articles
* Many others I'm forgetting :(

## Status & roadmap
Check out the current [TODO list](TODO.md)

## Usage
In order to use this generator you first need to install Yeoman:

```bash
npm install -g yeoman
```

Once Yeoman is installed, you can install this generator:

```bash
npm install -g generator-modern-web-dev
```

Create a new folder, go into it then invoke the generator by running the following command:
```bash
yo modern-web-dev
```

Once you've answered all the questions, the generator will do its thing. Once done, you can start the development web server and start hacking away using:
```bash
npm run serve
```

Enjoy!

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
* jspm.conf.js: ...
* runOnDocker.sh and runDevOnDocker.sh: build scripts that create/run Docker images
* tsconfig.json: TypeScript compiler configuration. Contains all compiler options, code style rules and file selection/exclusion rules (bypassed by the gulp-typescript plugin!)
  * http://json.schemastore.org/tsconfig
  * https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
* tsd.json: TypeScript's DefinitelyTyped (tsd) definitions configuration (more information: https://github.com/DefinitelyTyped/tsd)
* tslint.json: TypeScript code style configuration (more information: https://www.npmjs.com/package/tslint)
* Makefile: for \*NIX afficionados

## Adding project dependencies
As you go along, you'll surely need to add new dependencies for your application. If the dependency you want to add is required at runtime, then you should use JSPM to add it.
Installing a dependency with JSPM is as simple as `jspm install x`.

## Contributing
* Fork the project
* Create a feature branch in your fork
* Rebase if needed to keep the project history clean
* Commit your changes & push to GitHub
* Try and flood me with pull requests :)

## Building from source
If you want to build from source, you need to:
* install NodeJS and npm
* clone this git repository
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