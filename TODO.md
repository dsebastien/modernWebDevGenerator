* replace options with the options object!
* if argument is provided: don't prompt
* doc all existing options and how to use them
  * skipCache to ask all questions
  * skipInstall to skip the automatic installation after project creation
* add dependency versions check (same for mwd & mdl)
  *     "npm-check": "4.1.0"
  * var npmCheck = require("npm-check");
  * also add to generator after installation
* update Angular to alpha 39
* update jspm
* add scripts
* add build (gulp) with js style/quality checks for this project
* complete the readme
** how to add runtime dependencies (jspm)
** how to update runtime dependencies (jspm)
** commands list
** how to build from source section
** add more details for contributing (e.g., PR rules)
* add code coverage check
* add docker support
* create a sub-generator for Angular 2
* add dummy test in template
* make it possible to invoke with all answers at once (i.e., no prompt needed)
* finalize/test Makefile
* add choice for TypeScript vs ES2015 (dependent on flexibility in ModernWebDevBuild)
* write blog post
* add option to remove README.md files
* add npm shrinkwrap for this project
