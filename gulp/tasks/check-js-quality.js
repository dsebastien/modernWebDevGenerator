"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import jshint from "gulp-jshint";
//import debug from "gulp-debug";

import config from "../config";
import utils from "../utils";

gulp.task("check-js-quality", "Check JavaScript code quality using JSHint", () =>{
	return utils.plumbedSrc(// handle errors nicely (i.e., without breaking watch)
		config.javascript.srcPkg
	)

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Run JSHint
		.pipe(jshint())

		// Generate a stylish report
		.pipe(jshint.reporter("jshint-stylish"));

	// Fail the build only if BrowserSync is not active
	// Actually, failing the build is counter-productive thus evil
	//.pipe($.if(!browserSync.active, $.jshint.reporter("fail")));
});
