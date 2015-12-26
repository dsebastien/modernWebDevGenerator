"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import del from "del";

import config from "../config";

gulp.task("clean", "Clean", () =>{
	del([
			config.files.yeomanGenerator
		], {
			dot: true
		}
	);
});
