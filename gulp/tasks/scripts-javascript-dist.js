"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import changed from "gulp-changed";
import babel from "gulp-babel";
//import iff from "gulp-if";
import size from "gulp-size";
//import debug from "gulp-debug";

import config from "../config";
import utils from "../utils";

gulp.task("scripts-javascript-dist", "Transpile JavaScript (ES2015 to ES5 using Babel)", () =>{
	return utils.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
		config.javascript.src
	)

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// speed things up by ignoring unchanged resources
		.pipe(changed(config.javascript.dest))

		// Transpile ES2015 to ES5
		// options: https://babeljs.io/docs/usage/options/
		.pipe(babel({
			modules: "common",
			stage: 1, // enable experimental features (e.g., decorators, etc): http://babeljs.io/docs/usage/experimental/
			comments: false, // remove comments
			optional: [
				"runtime" // necessary to load regenerator (generators/async) & core-js (ES2015 static methods) automatically: https://babeljs.io/docs/usage/runtime/
			]
		}))

		// Copy files
		.pipe(gulp.dest(config.javascript.dest))

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Task result
		.pipe(size({
			title: "scripts-javascript"
		}));
});
