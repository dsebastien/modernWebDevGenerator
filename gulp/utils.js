"use strict";

// Include Gulp & tools we"ll use
import gulp from "gulp";
import notify from "gulp-notify";
import gutil from "gulp-util";
import plumber from "gulp-plumber";

const exitOnError = false; // whether we should make the house explode whenever errors occur (e.g., stop gulp serve)

// display errors nicely and avoid having errors breaking tasks/watch
// reference: https://github.com/mikaelbr/gulp-notify/issues/81
const reportError = function(error){
	const lineNumber = error.lineNumber ? "LINE " + error.lineNumber + " -- " : "";

	notify({
		title: "Task Failed [" + error.plugin + "]",
		message: lineNumber + "See console.",
		sound: true

		// the version below probably works on OSX
		//sound: "Sosumi" // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
	}).write(error);

	//gutil.beep(); // Beep "sosumi" again

	// Inspect the error object
	//gutil.log(error);

	// Easy error reporting
	//console.log(error.toString());

	// Pretty error reporting
	let report = "";
	const chalk = gutil.colors.white.bgRed;

	report += chalk("TASK:") + " [" + error.plugin + "]\n";
	report += chalk("ISSUE:") + " " + error.message + "\n";

	if(error.lineNumber){
		report += chalk("LINE:") + " " + error.lineNumber + "\n";
	}

	if(error.fileName){
		report += chalk("FILE:") + " " + error.fileName + "\n";
	}

	console.error(report);

	if(exitOnError){
		process.exit(1); // jshint ignore:line
	} else{
		// Prevent the "watch" task from stopping
		this.emit("end");
	}
};

// easily integrate plumber invocation
// reference: https://gist.github.com/floatdrop/8269868
const plumbedSrc = function(){
	return gulp.src.apply(gulp, arguments)
		.pipe(plumber({
			errorHandler: reportError
		}));
};

// utility function to exclude files from globs
const exclude = function(providedPath){
	return "!" + providedPath;
};

// utility function that filters out empty directories
// reference: http://stackoverflow.com/questions/23719731/gulp-copying-empty-directories
const filterEmptyDirectories = function(es){
	return es.map((file, cb) =>{
		if(file.stat.isFile()){
			return cb(null, file);
		} else{
			return cb();
		}
	});
};

export default {
	exclude,
	reportError,
	plumbedSrc,
	filterEmptyDirectories
};
