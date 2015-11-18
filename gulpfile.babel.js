/* Rather than manage one giant configuration file responsible
 for creating multiple gulp tasks, each task has been broken out into
 its own file. Any files in that directory get automatically required below.

 To add a new task, simply add a new task file that directory.
 gulp/tasks/default.js specifies the default set of tasks to run
 when you run `gulp`.

 Principle taken from gulp-starter: https://github.com/greypants/gulp-starter
 */
"use strict";

let gulp = require("gulp");
let help = require("gulp-help");

help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)

import requireDir from "require-dir";
import runSequence from "run-sequence";

// Load all tasks in gulp/tasks, including subfolders
requireDir("./gulp/tasks", {
	recurse: true
});

// Default task
gulp.task("default", "Build production files", (callback) =>{
	return runSequence("clean",  [
		"check-js-style",
		"check-js-quality",
		"scripts-javascript-dist",
		"validate-package-json"
	], callback);
});

