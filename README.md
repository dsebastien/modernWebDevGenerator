# Modern Web Dev Generator

[![Build Status](https://secure.travis-ci.org/dsebastien/modernWebDevGenerator.png?branch=master)](https://travis-ci.org/dsebastien/modernWebDevGenerator)
[![Coverage Status](https://img.shields.io/coveralls/dsebastien/modernWebDevGenerator.svg?style=flat)](https://coveralls.io/r/dsebastien/modernWebDevGenerator?branch=master)
[![Dependency Status](https://david-dm.org/dsebastien/modernWebDevGenerator.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevGenerator)
[![devDependency Status](https://david-dm.org/dsebastien/modernWebDevGenerator/dev-status.svg?theme=shields.io&style=flat)](https://david-dm.org/dsebastien/modernWebDevGenerator#info=devDependencies)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-green.svg?style=flat)](https://gitter.im/dsebastien/modernWebDevGenerator?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


## About
ModernWebDevGenerator is a [Yeoman](http://yeoman.io/) generator aiming to provide a modern build for Web development.

Projects created with this Yeoman Generator will be able to directly leverage the awesome Gulp-based build provided by the [Modern Web Dev Build](https://github.com/dsebastien/modernWebDevBuild) project, which includes many tasks and features out of the box (e.g., transpilation of TypeScript/ES2015 to ES5, SASS transformation to CSS, Minification, Bundling, Sourcemaps, ...).

Next to that, the project structure is very directive so as to promote good practices. README files are placed in multiple locations to describe what you should/shouldn't do.

The generated projects include a working setup of Angular 2 with SystemJS

Just like the Modern Web Dev Build, this project is very opiniated and there aren't many customization options. The goal is not to provide many options for many different needs. Rather, technology/code organization choices are embedded and either those are ok for or you're free to use something else that better fits your needs... :)

Any feedback/contributions are welcome to improve the project so don't hesitate!

This project is available as an NPM package; check out the usage instructions below.

## Status & roadmap
Check out the current [TODO list](TODO.md)

## Features
* TypeScript > ES6 > ES5 transpilation w/ sourcemaps
* SASS > CSS transformation w/ sourcemaps
* production build creation with minification & bundling
* ...

## Usage
In order to use this generator you first need to install Yeoman:

```bash
npm install -g yeoman
```

Once Yeoman is installed, you can install this generator:

```bash
npm install -g generator-modern-web-dev
```

To invoke the generator, you can simply use:
```bash
yo modern-web-dev
```

## Commands
* ...

## Building from source
If you want to build from source, you need to:
* install NodeJS
* clone this git repository
* go to the folder where you've cloned the project
* ...

## Generated projects build dependencies
* jspm: JS package manager; abstracts away npm, bower etc: https://www.npmjs.com/package/jspm
* apache-server-configs: base Apache HTTP Server config (allows/configures CORS, adds the X-UA-Compatible header, defines all media types correctly such as SVG, ...): https://www.npmjs.com/package/apache-server-configs

## Generated projects runtime dependencies
* node-reset-scss: Eric Meyer's CSS reset: https://www.npmjs.com/package/node-reset-scss
* normalize.css: Nicolas Gallagher's Normalize CSS (alternative to CSS resets): https://www.npmjs.com/package/normalize.css
* angular 2
* lodash: https://www.npmjs.com/package/lodash
* font-awesome: pictographic icons https://www.npmjs.com/package/font-awesome

## Generated projects configuration files
The project includes multiple configuration files. Here's some information about these:
* gulpfile.babel.js: gulp's configuration file. This is where the Modern Web Dev Build tasks are loaded
* package.json: NPM's configuration file. This is where all dependencies are defined: project ones under 'jspm' and build-related ones under 'devDependencies' (more information: https://docs.npmjs.com/files/package.json)
* .dockerignore: files that are ignored by Docker when creating images
* .editorconfig: helps configure code style for various text editors (more information here: http://editorconfig.org)
* .gitattributes: allows to define git attributes per path (more information here: http://git-scm.com/docs/gitattributes)
* .gitignore: configures files/folders that are ignored by git
* .jscsrc: configuration file for JSCS. It defines the JS code style (more information: http://jscs.info/overview.html#options)
  * note that it is configured to use ES Next
  * rules reference: http://jscs.info/rules.html
  * news: https://github.com/jscs-dev/node-jscs/blob/master/CHANGELOG.md
* .jshintrc: JSHint configuration
  * rules reference: http://jshint.com/docs/options
  * more information: http://jshint.com/docs/)
* bower.json and .bowerrc: bower's configuration file (just in case bower is later used to manage the project's dependencies). For now I'm using NPM and am satisfied with it (more information: http://bower.io/)
* Dockerfile and DockerfileDev: Docker configuration files used to describe how Docker images should be created for this project (more information: https://www.docker.com/ and http://docs.docker.com/reference/builder/)
* runOnDocker.sh and runDevOnDocker.sh: build scripts that create/run Docker images
* travis.yml: Travis CI configuration files (more information: http://docs.travis-ci.com/user/build-configuration/)
* tsconfig.json: TypeScript compiler configuration. Contains all compiler options, code style rules and file selection/exclusion rules (bypassed by the gulp-typescript plugin!)
  * http://json.schemastore.org/tsconfig
  * https://github.com/Microsoft/TypeScript/wiki/tsconfig.json
* tsd.json: TypeScript's DefinitelyTyped (tsd) definitions configuration (more information: https://github.com/DefinitelyTyped/tsd)
* tslint.json: TypeScript code style configuration (more information: https://www.npmjs.com/package/tslint)
* npm-shrinkwrap.json: file created using npm shrinkwrap. Blocks dependency versions (including transitive ones), needed for build stability

## Building from sources
* clone the project
* ...

## Contributing
* Fork the project
* Create a feature branch in your fork
* Commit your changes & push to GitHub
* create a pull request :)

## Authors
### Sebastien Dubois
* [@Blog](http://www.dsebastien.net)
* [@Twitter](http://twitter.com/dSebastien)
* [@GitHub](http://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
