"use strict";

//import utils from "./utils";

const templatesFolder = "templates";

const extensions = {
	javascript: ".js"
};

const folders = {
	root: ".",
	dist: "./app",
	src: "./src",
	srcTemplates: "./" + templatesFolder,
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
	gulpfile: folders.root + "/gulpfile.babel.js"
};

const javascript = {
	src: [
		folders.src + globs.scripts.javascript
	],
	srcPkg: [
		folders.src + globs.scripts.javascript,
		folders.srcPkg + globs.scripts.javascript,
		files.gulpfile
	],
	dest: folders.dist
};

const copy = {
	src: [
		folders.srcTemplates + globs.any
	],
	dest: `${folders.dist}/${templatesFolder}`
};

module.exports = {
	extensions,
	folders,
	globs,
	files,
	javascript,
	copy
};
