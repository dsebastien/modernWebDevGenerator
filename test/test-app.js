"use strict";

const path = require("path");
//const os = require("os");
const assert = require("yeoman-generator").assert;
const helpers = require("yeoman-generator").test;

const config = require("../gulp/config");

describe("modern-web-dev:app", () =>{
	before((done) =>{
		helpers.run(path.join(__dirname, "../" + config.folders.dist)) // jshint ignore:line
			.withOptions({
				skipInstall: true
			})
			.withPrompts(
			{
				someOption: true
			})
			.on("end", done);

		//.withOptions({ foo: 'bar' })    // Mock options passed in
		//.withArguments(['name-x'])      // Mock the arguments
		//.withPrompts({ coffee: false }) // Mock the prompt answers
	});

	it("creates files", () =>{
		assert.file([
			"package.json",
			".jshintrc",
			".jshintignore",
			".jscsrc",
			".gitignore",
			"gulpfile.babel.js",
			"jspm.conf.js",
			"tsconfig.json",
			"tsd.json",
			"tslint.json"
		]);
	});
});
