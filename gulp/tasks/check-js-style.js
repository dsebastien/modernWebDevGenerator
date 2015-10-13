"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import jscs from "gulp-jscs";
import jscsStylish from "gulp-jscs-stylish";
import size from "gulp-size";
//import debug from "gulp-debug";

import config from "../config";
import utils from "../utils";

gulp.task("check-js-style", "Enforce JavaScript code style", () =>{
	// handle errors nicely (i.e., without breaking watch)
	return utils.plumbedSrc(
		config.javascript.srcPkg
	)

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Check JS code style (uses .jscsrc)
		.pipe(
		jscs({
			configPath: config.folders.root + "/.jscsrc", // required otherwise the configuration didn't seem to get loaded
			esnext: true, // seems broken: https://github.com/jscs-dev/gulp-jscs/issues/69
			fix: false
		})
	)

		//.pipe(debug({title: "Stream contents:", minimal: true}))

		.pipe(jscsStylish()) // log style errors

		// Task result
		.pipe(size({
			title: "check-js-style"
		}));
});
