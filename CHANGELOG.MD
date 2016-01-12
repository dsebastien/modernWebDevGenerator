* 0.2.1
  * updated gitignore for typings
* 0.2.0
  * now supports Angular 2 beta 1
  * now uses modernWebDevBuild 0.3.x: https://github.com/dsebastien/modernWebDevBuild/releases/tag/0.3.0
  * switched from tsd to typings for TypeScript typings management (new kid in town)
    * typings supports typings on DefinitelyTyped but has a lot more to offer
    * check out the following links
      * https://github.com/typings/typings
      * https://angularclass.com/the-state-of-typescript-packages/
  * upgraded babel dependencies
  * added Jasmine imports in the provided unit tests
* 0.1.4
  * added a update check: you will be notified whenever a new version of the generator is available
    * you can disable the update check by passing the following flag: `--no-update-notifier`
* 0.1.3
  * now uses modernWebDevBuild 0.2.x
  * disabled HTML minification by default (not supported by Angular 2 anymore: https://github.com/dsebastien/modernWebDevBuild/issues/67)
  * fixed RxJS dependency in the JSPM configuration (fixes #46)
* 0.1.2
  * now uses modernWebDevBuild 0.2.1
  * fixes an issue with the production build (see #44)
* 0.1.1
  * now uses modernWebDevBuild 0.2.0
* 0.1.0
  * supports Angular 2 beta 0
  * now uses modernWebDevBuild 0.1.1
  * added unit testing support (with Karma, Jasmine and JSPM/SystemJS) (closes #37)
  * fix for #33 avoid the need for installing dependencies globally
  * enabled noImplicitAny by default (closes #41)
  * added tsd back: necessary for custom typings & typings of libraries not yet specifying their typings through package.json
	* this _will_ be replaced by the typings library in a next release
	* added typings folder with split between custom and third party
	* added tsd related scripts in package.json
  * updated yeoman generator dependency (includes some bug fixes)
* 0.0.8
  * now uses modernWebDevBuild 0.1.0
  * supports Babel 6
* 0.0.7
  * updated for Angular 2 alpha 46
  * (internal) upgraded to Babel 6
* 0.0.6
  * added missing zone.js import. Fixes #28
  * display the version number on execution
* 0.0.5
  * updated for Angular 2 alpha 45
* 0.0.4
  * added a missing dependency (#27)
* 0.0.3
  * use the last modern-web-dev-build version
  * removed typings & tsd usage entirely
  * use relative paths for imports & templateUrl
* 0.0.2
  * Updated for Angular 2 alpha 44
* 0.0.1
  * Initial version
