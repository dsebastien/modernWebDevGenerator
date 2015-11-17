"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import size from "gulp-size";
//import debug from "gulp-debug";
import mocha from "gulp-mocha";
require("babel-core/register");

import config from "../config";
import utils from "../utils";

gulp.task("test", "Run tests", [ "scripts-javascript-dist" ], () =>{
	// handle errors nicely (i.e., without breaking watch)
	return utils.plumbedSrc(
		config.javascript.tests, {
			read: false
		}
	)	

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Run the tests
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({
			reporter: "spec"
		}))

		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Task result
		.pipe(size({
			title: "test"
		}));
});
