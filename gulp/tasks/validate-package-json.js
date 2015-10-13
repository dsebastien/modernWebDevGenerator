"use strict";

import gulp from "gulp";
import help from "gulp-help";
help(gulp); // provide help through "gulp help" -- the help text is the second gulp task argument (https://www.npmjs.com/package/gulp-help/)
import packageJsonValidator from "gulp-nice-package";

import config from "../config";
import utils from "../utils";

gulp.task("validate-package-json", "Validate the package.json file", () =>{
	return utils.plumbedSrc(config.files.packageJSON)
		.pipe(packageJsonValidator());
});
