* if argument is provided: don't prompt
* add dependency versions check (same for mwd & mdl)
  *     "npm-check": "4.1.0"
  * var npmCheck = require("npm-check");
  * also add to generator after installation
* update to latest Angular version
  * remove useless typings
    * https://docs.google.com/document/d/1LvPBh7yxmjr7N1vCQ-kBj4guZGfGLBiz44CfenOX6o0/preview
* update jspm
* add scripts (dependent of ModernWebDevBuild improvements)
* complete the readme
** how to add runtime dependencies (jspm)
** how to update runtime dependencies (jspm)
** commands list
* create a sub-generator for Angular 2
* add dummy test in template
* add choice for TypeScript vs ES2015 (dependent on flexibility in ModernWebDevBuild)
* add answer caching (e.g., author info)
  * mention the --skip-cache option if the user wants to be asked everything
  * ref: http://yeoman.io/authoring/storage.html
* add tests
  * generated project content
  * options
* add docker support
* add watch task
  * build, check code style, code quality, run tests
  * https://github.com/gulpjs/gulp/blob/master/docs/recipes/mocha-test-runner-with-gulp.md
* add npm shrinkwrap for this project
* add code coverage check
* finalize/test Makefile
* replace es6 by es2015 now that the following has landed: https://github.com/Microsoft/TypeScript/issues/5209
  * requires update of TypeScript
