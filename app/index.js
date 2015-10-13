"use strict";

var generators = require("yeoman-generator");
var yosay = require("yosay");
var chalk = require("chalk");

module.exports = generators.Base.extend({

	constructor: function(){
		// Setup the base generator
		generators.Base.apply(this, arguments);

		// Custom code
		//this.option("foo"); // to add a "--foo" flag
		//this.argument("appname", { type: String, required: false});
	},

	// contexts list: http://yeoman.io/authoring/running-context.html
	prompting: function(){
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay("Welcome to the " + chalk.green("ModernWebDev") + " Yeoman Generator"));

		var prompts = [
			{
				type: "input",
				name: "projectName",
				message: "What is the project name?",
				default: this.appname // default: current folder name
			},
			{
				type: "input",
				name: "projectShortName",
				message: "What is the project name shortname?",
				default: this.appname // default: current folder name
			},
			{
				type: "input",
				name: "projectDescription",
				message: "What is the project description?",
				default: "Created by the ModernWebDev Yeoman Generator"
			},
			{
				type: "input",
				name: "projectOwner",
				message: "What is your name?",
				default: "nobody"
			},
			{
				type: "input",
				name: "projectOwnerRole",
				message: "What is your role?",
				default: "Project Lead"
			},
			{
				type: "input",
				name: "projectOwnerMail",
				message: "What is your e-mail address?",
				default: "foo@bar.com"
			},
			{
				type: "input",
				name: "projectOwnerURL",
				message: "What is the address of your website?",
				default: "https://twitter.com/dsebastien"
			},
			{
				type: "input",
				name: "projectURL",
				message: "What is the address of the project?",
				default: "https://www.dsebastien.net"
			}
		];

		this.prompt(prompts, function(answers){
			this.props = answers; // to access props later use this.props.someOption;

			done();
		}.bind(this));
	},

	configuring: {
		projectFiles: function(){
			var projectTemplatesFolder = "./projectTemplates/";
			var projectFilesFolder = "./projectFiles/";

			// copy files that do not need pre-processing
			this.directory(projectFilesFolder, ".");

			// copy all files that need specific processing
			this.fs.copyTpl(
				this.templatePath(projectTemplatesFolder + "package.json"),
				this.destinationPath("package.json"),
				{
					projectName: this.props.projectName,
					projectShortName: this.props.projectShortName,
					projectDescription: this.props.projectDescription,
					projectOwner: this.props.projectOwner,
					projectOwnerRole: this.props.projectOwnerRole,
					projectOwnerMail: this.props.projectOwnerMail,
					projectOwnerURL: this.props.projectOwnerURL,
					projectURL: this.props.projectURL
				}
			);
			this.fs.copyTpl(
				this.templatePath(projectTemplatesFolder + "README.md"),
				this.destinationPath("README.md"),
				{
					projectName: this.props.projectName,
					projectShortName: this.props.projectShortName,
					projectDescription: this.props.projectDescription,
					projectOwner: this.props.projectOwner,
					projectOwnerRole: this.props.projectOwnerRole,
					projectOwnerMail: this.props.projectOwnerMail,
					projectOwnerURL: this.props.projectOwnerURL,
					projectURL: this.props.projectURL
				}
			);
		},

		applicationFiles: function(){
			var applicationTemplatesFolders = "./applicationTemplates/";
			var applicationFilesFolder = "./applicationFiles/";

			// copy files that do not need pre-processing
			this.directory(applicationFilesFolder, ".");

			// copy all files that need specific processing
			this.fs.copyTpl(
				this.templatePath(applicationTemplatesFolders + "app/index.html"),
				this.destinationPath("app/index.html"),
				{
					projectName: this.props.projectName,
					projectShortName: this.props.projectShortName,
					projectDescription: this.props.projectDescription,
					projectOwner: this.props.projectOwner,
					projectOwnerRole: this.props.projectOwnerRole,
					projectOwnerMail: this.props.projectOwnerMail,
					projectOwnerURL: this.props.projectOwnerURL,
					projectURL: this.props.projectURL
				}
			);
			this.fs.copyTpl(
				this.templatePath(applicationTemplatesFolders + "app/humans.txt"),
				this.destinationPath("app/humans.txt"),
				{
					projectName: this.props.projectName,
					projectShortName: this.props.projectShortName,
					projectDescription: this.props.projectDescription,
					projectOwner: this.props.projectOwner,
					projectOwnerRole: this.props.projectOwnerRole,
					projectOwnerMail: this.props.projectOwnerMail,
					projectOwnerURL: this.props.projectOwnerURL,
					projectURL: this.props.projectURL
				}
			);
			this.fs.copyTpl(
				this.templatePath(applicationTemplatesFolders + "app/manifest.json"),
				this.destinationPath("app/manifest.json"),
				{
					projectName: this.props.projectName,
					projectShortName: this.props.projectShortName,
					projectDescription: this.props.projectDescription,
					projectOwner: this.props.projectOwner,
					projectOwnerRole: this.props.projectOwnerRole,
					projectOwnerMail: this.props.projectOwnerMail,
					projectOwnerURL: this.props.projectOwnerURL,
					projectURL: this.props.projectURL
				}
			);
			this.fs.copyTpl(
				this.templatePath(applicationTemplatesFolders + "app/manifest.webapp"),
				this.destinationPath("app/manifest.webapp"),
				{
					projectName: this.props.projectName,
					projectShortName: this.props.projectShortName,
					projectDescription: this.props.projectDescription,
					projectOwner: this.props.projectOwner,
					projectOwnerRole: this.props.projectOwnerRole,
					projectOwnerMail: this.props.projectOwnerMail,
					projectOwnerURL: this.props.projectOwnerURL,
					projectURL: this.props.projectURL
				}
			);
		}
	},

	writing: {
		application: function(){
			// TODO add application setup
		}
	},

	install: function(){
		this.spawnCommand("npm", [ "run", "setup" ]);
	}
});
