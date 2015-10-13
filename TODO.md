* if argument is provided: don't prompt
* add dependency versions check (same for mwd & mdl)
  *     "npm-check": "4.1.0"
  * var npmCheck = require("npm-check");
  * also add to generator after installation
* update Angular to alpha 39
* update jspm
* add scripts (dependent of ModernWebDevBuild improvements)
* complete the readme
** how to add runtime dependencies (jspm)
** how to update runtime dependencies (jspm)
** commands list
* create a sub-generator for Angular 2
* add dummy test in template
* finalize/test Makefile
* add choice for TypeScript vs ES2015 (dependent on flexibility in ModernWebDevBuild)
* add answer caching (e.g., author info)
  * mention the --skip-cache option if the user wants to be asked everything
  * ref: http://yeoman.io/authoring/storage.html
* add tests
  * generated project content
  * options
* add code coverage check
* add docker support
* add npm shrinkwrap for this project
