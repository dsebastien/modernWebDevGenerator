"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
//import changed from "gulp-changed";
import babel from "gulp-babel";
//import iff from "gulp-if";
import size from "gulp-size";
import rename from "gulp-rename";
//import debug from "gulp-debug";

import config from "../config";
import utils from "../utils";

gulp.task("scripts-javascript-dist", "Transpile JavaScript (ES2015 to ES5 using Babel)", () =>{
	return utils.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
		config.javascript.src
		)

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Transpile ES2015 to ES5
		// options: https://babeljs.io/docs/usage/options/
		.pipe(babel())

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Remove the es2015 extension
		.pipe(rename((path) =>{
			path.basename = path.basename.replace(config.extensions.es2015, "");
		}))

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Copy files
		.pipe(gulp.dest(config.javascript.dest))

		// Task result
		.pipe(size({
			title: "scripts-javascript"
		}));
});
