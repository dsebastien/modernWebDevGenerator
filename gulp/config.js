"use strict";

import utils from "./utils";

const extensions = {
	javascript: ".js",
	es2015: ".es2015"
};

const folders = {
	root: ".",
	dist: "./app",
	src: "./app",
	templates: "./app/templates",
	srcPkg: "./gulp",
	nodeModules: "./node_modules"
};

const globs = {
	any: "/**/*",
	scripts: {
		javascript: "/**/*" + extensions.javascript
	}
};

const files = {
	any: "*",
	packageJSON: folders.root + "/package.json",
	gulpfile: folders.root + "/gulpfile.babel.js",
	yeomanGenerator: folders.src + "/index.js"
};

const javascript = {
	src: [
		folders.src + globs.scripts.javascript,
		utils.exclude(folders.templates + globs.scripts.javascript)
	],
	srcPkg: [
		folders.src + globs.scripts.javascript,
		files.gulpfile,
		folders.srcPkg + globs.scripts.javascript,
		utils.exclude(folders.templates + globs.scripts.javascript)
	],
	dest: folders.dist
};

export default {
	extensions,
	folders,
	globs,
	files,
	javascript
};
