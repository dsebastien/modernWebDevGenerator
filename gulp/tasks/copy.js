"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import eventStream from "event-stream";
import size from "gulp-size";
//import debug from "gulp-debug";

import config from "../config";
import utils from "../utils";

gulp.task("copy", "Copy all files except HTML/CSS/JS which are processed separately", () =>{
	return utils.plumbedSrc(
		config.copy.src, {
			dot: true
		})

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Filter out the empty directories
		.pipe(utils.filterEmptyDirectories(eventStream))

		// Display the files in the stream
		//.pipe(debug({title: "Stream contents:", minimal: true}))

		// Copy
		.pipe(gulp.dest(config.copy.dest))

		// Task result
		.pipe(size({
			title: "copy"
		}));
});
