"use strict";

var yeoman = require("yeoman-generator");
var yosay = require("yosay");
var chalk = require("chalk");

module.exports = yeoman.Base.extend({

	constructor: function(){
		// Setup the base generator
		yeoman.Base.apply(this, arguments);
		
		// all options can be passed directly
		this.argument("projectName", {
			desc: "Name of the project",
			type: String,
			required: false
		});
		this.argument("projectShortName", {
			desc: "Shortname of the project",
			type: String,
			required: false
		});
		this.argument("projectDescription", {
			desc: "Description of the project",
			type: String,
			required: false
		});
		this.argument("projectOwner", {
			desc: "Owner of the project",
			type: String,
			required: false
		});
		this.argument("projectOwnerRole", {
			desc: "Role of the project owner",
			type: String,
			required: false
		});
		this.argument("projectOwnerMail", {
			desc: "Mail of the project owner",
			type: String,
			required: false
		});
		this.argument("projectOwnerURL", {
			desc: "URL of the project owner",
			type: String,
			required: false
		});
		this.argument("projectURL", {
			desc: "URL of the project",
			type: String,
			required: false
		});
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
			// copy files that do not need pre-processing
			this.directory("./projectFiles/", ".");
		},

		projectTemplates: function(){
			var projectTemplatesFolder = "./projectTemplates/";

			// copy all files that need specific processing
			this.fs.copyTpl(
				this.templatePath(projectTemplatesFolder + "package.json"),
				this.destinationPath("package.json"), {
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
		}
	},

	writing: {
		applicationFiles: function(){
			// copy files that do not need pre-processing
			this.directory("./applicationFiles/", ".");
		},

		applicationTemplates: function(){
			var applicationTemplatesFolders = "./applicationTemplates/";

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

	install: function(){
		var skipInstall = this.options[ "skip-install" ];

		this.log("Project created successfully. Enjoy!");

		if(skipInstall){
			this.log("Run 'npm run setup' to install all required dependencies.");
		} else{
			this.spawnCommand("npm", [ "run", "setup" ]);
		}
	}

	// contexts: initializing, prompting, configuring, default, writing, conflicts, install, end
});
