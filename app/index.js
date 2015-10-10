'use strict';
var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


module.exports = generators.Base.extend({

	constructor: function () {
		// Setup the base generator
		generators.Base.apply(this, arguments);

		// Custom code
		//this.option('foo'); // to add a '--foo' flag
		this.argument('appname', { type: String, required: false});
	},

	// contexts list: http://yeoman.io/authoring/running-context.html
	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay('Welcome to the ' + chalk.green('ModernWebDev') + ' Yeoman Generator'));

		var prompts = [
			{
				type: 'input',
				name: 'projectName',
				message: 'What is the project name?',
				default: this.appname // default: current folder name
			},
			{
				type: 'input',
				name: 'projectDescription',
				message: 'What is the project description?',
				default: 'Created by the Modern Web Dev Yeoman Generator'
			}
		];

		this.prompt(prompts, function (answers) {
			this.props = answers; // to access props later use this.props.someOption;

			done();
		}.bind(this));
	},

	writing: {
		application: function () {
			this.fs.copy(
				this.templatePath('_package.json'),
				this.destinationPath('package.json'),
				{
					projectName: this.props.projectName,
					projectDescription: this.props.projectDescription
				}
			);
			this.fs.copy(
				this.templatePath('_jspm.conf.js'),
				this.destinationPath('jspm.conf.js')
			);
			this.fs.copy(
				this.templatePath('_tsconfig.json'),
				this.destinationPath('tsconfig.json')
			);
			this.fs.copy(
				this.templatePath('_tsd.json'),
				this.destinationPath('tsd.json')
			);
			// todo copy other app files
		},
		projectFiles: function () {
			this.fs.copy(
				this.templatePath('_dockerignore'),
				this.destinationPath('.dockerignore')
			);
			this.fs.copy(
				this.templatePath('_editorconfig'),
				this.destinationPath('.editorconfig')
			);
			this.fs.copy(
				this.templatePath('_gitattributes'),
				this.destinationPath('.gitattributes')
			);
			this.fs.copy(
				this.templatePath('_gitignore'),
				this.destinationPath('.gitignore')
			);
			this.fs.copy(
				this.templatePath('_jscsrc'),
				this.destinationPath('.jscsrc')
			);
			this.fs.copy(
				this.templatePath('_jshintrc'),
				this.destinationPath('.jshintrc')
			);
			this.fs.copy(
				this.templatePath('_jshintignore'),
				this.destinationPath('.jshintignore')
			);
			this.fs.copy(
				this.templatePath('_travis.yml'),
				this.destinationPath('.travis.yml')
			);
			this.fs.copy(
				this.templatePath('_tslint.json'),
				this.destinationPath('tslint.json')
			);
			this.fs.copy(
				this.templatePath('_gulpfile.babel.js'),
				this.destinationPath('gulpfile.babel.js')
			);
			this.fs.copy(
				this.templatePath('_README.md'),
				this.destinationPath('README.md'),
				{
					projectName: this.props.projectName,
					projectDescription: this.props.projectDescription
				}
			);

		}
	},

	install: function () {
		this.installDependencies();
	}
});
