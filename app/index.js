"use strict";

var yeoman = require("yeoman-generator");
var yosay = require("yosay");
var chalk = require("chalk");

var argumentDescriptors = {
	projectName: {
		name: "projectName",
		argumentName: "project-name",
		description: "Name of the project",
		prompt: "What is the project name?"
	},
	projectShortName: {
		name: "projectShortName",
		argumentName: "project-short-name",
		description: "Shortname of the project",
		prompt: "What is the project name shortname?"
	},
	projectDescription: {
		name: "projectDescription",
		argumentName: "project-description",
		description: "Description of the project",
		prompt: "What is the project description?"
	},
	projectOwner: {
		name: "projectOwner",
		argumentName: "project-owner",
		description: "Owner of the project",
		prompt: "What is your name?"
	},
	projectOwnerRole: {
		name: "projectOwnerRole",
		argumentName: "project-owner-role",
		description: "Role of the project owner",
		prompt: "What is your role?"
	},
	projectOwnerMail: {
		name: "projectOwnerMail",
		argumentName: "project-owner-mail",
		description: "Mail of the project owner",
		prompt: "What is your e-mail address?"
	},
	projectOwnerURL: {
		name: "projectOwnerURL",
		argumentName: "project-owner-url",
		description: "URL of the project owner",
		prompt: "What is the address of your website?"
	},
	projectURL: {
		name: "projectURL",
		argumentName: "project-url",
		description: "URL of the project",
		prompt: "What is the address of the project?"
	}
}

let modernWebDevGenerator = yeoman.Base.extend({

	constructor: function(){
		// Setup the base generator
		yeoman.Base.apply(this, arguments);

		// all options can be passed directly
		this.argument(argumentDescriptors.projectName.argumentName, {
			desc: argumentDescriptors.projectName.description,
			type: String,
			required: false
		});
		this.argument(argumentDescriptors.projectShortName.argumentName, {
			desc: argumentDescriptors.projectShortName.description,
			type: String,
			required: false
		});
		this.argument(argumentDescriptors.projectDescription.argumentName, {
			desc: argumentDescriptors.projectDescription.description,
			type: String,
			required: false
		});
		this.argument(argumentDescriptors.projectOwner.argumentName, {
			desc: argumentDescriptors.projectOwner.description,
			type: String,
			required: false
		});
		this.argument(argumentDescriptors.projectOwnerRole.argumentName, {
			desc: argumentDescriptors.projectOwnerRole.description,
			type: String,
			required: false
		});
		this.argument(argumentDescriptors.projectOwnerMail.argumentName, {
			desc: argumentDescriptors.projectOwnerMail.description,
			type: String,
			required: false
		});
		this.argument(argumentDescriptors.projectOwnerURL.argumentName, {
			desc: argumentDescriptors.projectOwnerURL.description,
			type: String,
			required: false
		});
		this.argument(argumentDescriptors.projectURL.argumentName, {
			desc: argumentDescriptors.projectURL.description,
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
				name: argumentDescriptors.projectName.name,
				message: argumentDescriptors.projectName.prompt,
				default: this.appname // default: current folder name
			},
			{
				type: "input",
				name: argumentDescriptors.projectShortName.name,
				message: argumentDescriptors.projectShortName.prompt,
				default: this.appname // default: current folder name
			},
			{
				type: "input",
				name: argumentDescriptors.projectDescription.name,
				message: argumentDescriptors.projectDescription.prompt,
				default: "Created by the ModernWebDev Yeoman Generator"
			},
			{
				type: "input",
				name: argumentDescriptors.projectOwner.name,
				message: argumentDescriptors.projectOwner.prompt,
				default: "nobody"
			},
			{
				type: "input",
				name: argumentDescriptors.projectOwnerRole.name,
				message: argumentDescriptors.projectOwnerRole.prompt,
				default: "Project Lead"
			},
			{
				type: "input",
				name: argumentDescriptors.projectOwnerMail.name,
				message: argumentDescriptors.projectOwnerMail.prompt,
				default: "foo@bar.com"
			},
			{
				type: "input",
				name: argumentDescriptors.projectOwnerURL.name,
				message: argumentDescriptors.projectOwnerURL.prompt,
				default: "https://twitter.com/dsebastien"
			},
			{
				type: "input",
				name: argumentDescriptors.projectURL.name,
				message: argumentDescriptors.projectURL.prompt,
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
				this.destinationPath("package.json"), this.props
			);
			this.fs.copyTpl(
				this.templatePath(projectTemplatesFolder + "README.md"),
				this.destinationPath("README.md"), this.props
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
				this.destinationPath("app/index.html"), this.props
			);
			this.fs.copyTpl(
				this.templatePath(applicationTemplatesFolders + "app/humans.txt"),
				this.destinationPath("app/humans.txt"), this.props
			);
			this.fs.copyTpl(
				this.templatePath(applicationTemplatesFolders + "app/manifest.json"),
				this.destinationPath("app/manifest.json"), this.props
			);
			this.fs.copyTpl(
				this.templatePath(applicationTemplatesFolders + "app/manifest.webapp"),
				this.destinationPath("app/manifest.webapp"), this.props
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

module.exports = modernWebDevGenerator;
