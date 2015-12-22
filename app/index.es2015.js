"use strict";

const packageJSON = require("../package.json");

import yeoman from "yeoman-generator";
import yosay  from "yosay";
import chalk from "chalk";
import updateNotifier from "update-notifier";
import stringLength from "string-length";

const descriptors = {
	projectName: {
		name: "projectName",
		argName: "project-name",
		description: "Name of the project",
		prompt: "What is the project name?"
	},
	projectShortName: {
		name: "projectShortName",
		argName: "project-short-name",
		description: "Shortname of the project",
		prompt: "What is the project name shortname?"
	},
	projectDescription: {
		name: "projectDescription",
		argName: "project-description",
		description: "Description of the project",
		prompt: "What is the project description?"
	},
	projectOwner: {
		name: "projectOwner",
		argName: "project-owner",
		description: "Owner of the project",
		prompt: "What is your name?"
	},
	projectOwnerRole: {
		name: "projectOwnerRole",
		argName: "project-owner-role",
		description: "Role of the project owner",
		prompt: "What is your role?"
	},
	projectOwnerMail: {
		name: "projectOwnerMail",
		argName: "project-owner-mail",
		description: "Mail of the project owner",
		prompt: "What is your e-mail address?"
	},
	projectOwnerURL: {
		name: "projectOwnerURL",
		argName: "project-owner-url",
		description: "URL of the project owner",
		prompt: "What is the address of your website?"
	},
	projectURL: {
		name: "projectURL",
		argName: "project-url",
		description: "URL of the project",
		prompt: "What is the address of the project?"
	}
};

function checkForUpdates() {
	const notifier = updateNotifier({
		pkg: packageJSON
		//,updateCheckInterval: 1 // useful for debugging
	});
	
	let message = [];
	
	let retVal;

	if (notifier.update) {
		message.push("Update available: " + chalk.green.bold(notifier.update.latest) + chalk.gray(" (current: " + notifier.update.current + ")"));
		message.push("Run " + chalk.magenta("npm install -g " + packageJSON.name) + " to update.");
		retVal = yosay(message.join(" "), {maxLength: stringLength(message[0])});
	}
	return retVal;
}

let modernWebDevGenerator = yeoman.Base.extend({

	constructor: function () {
		// Setup the base generator
		yeoman.Base.apply(this, arguments);

		// all options can be passed directly
		this.argument(descriptors.projectName.argName, {
			desc: descriptors.projectName.description,
			type: String,
			required: false
		});
		this.argument(descriptors.projectShortName.argName, {
			desc: descriptors.projectShortName.description,
			type: String,
			required: false
		});
		this.argument(descriptors.projectDescription.argName, {
			desc: descriptors.projectDescription.description,
			type: String,
			required: false
		});
		this.argument(descriptors.projectOwner.argName, {
			desc: descriptors.projectOwner.description,
			type: String,
			required: false
		});
		this.argument(descriptors.projectOwnerRole.argName, {
			desc: descriptors.projectOwnerRole.description,
			type: String,
			required: false
		});
		this.argument(descriptors.projectOwnerMail.argName, {
			desc: descriptors.projectOwnerMail.description,
			type: String,
			required: false
		});
		this.argument(descriptors.projectOwnerURL.argName, {
			desc: descriptors.projectOwnerURL.description,
			type: String,
			required: false
		});
		this.argument(descriptors.projectURL.argName, {
			desc: descriptors.projectURL.description,
			type: String,
			required: false
		});
	},

	// contexts list: http://yeoman.io/authoring/running-context.html
	prompting: function () {
		let done = this.async();
		
		const welcomeMessage = yosay("Welcome to the " + chalk.green("ModernWebDev") + " Yeoman Generator (v" + packageJSON.version + ")");
		const updateMessage = checkForUpdates();

		// Have Yeoman greet the user
		if(updateMessage){
			this.log(updateMessage);
		}else{
			this.log(welcomeMessage);
		}
		
		const prompts = [
			{
				type: "input",
				name: descriptors.projectName.name,
				message: descriptors.projectName.prompt,
				default: this.appname // default: current folder name
			},
			{
				type: "input",
				name: descriptors.projectShortName.name,
				message: descriptors.projectShortName.prompt,
				default: this.appname // default: current folder name
			},
			{
				type: "input",
				name: descriptors.projectDescription.name,
				message: descriptors.projectDescription.prompt,
				default: "Created by the ModernWebDev Yeoman Generator"
			},
			{
				type: "input",
				name: descriptors.projectOwner.name,
				message: descriptors.projectOwner.prompt,
				default: "nobody"
			},
			{
				type: "input",
				name: descriptors.projectOwnerRole.name,
				message: descriptors.projectOwnerRole.prompt,
				default: "Project Lead"
			},
			{
				type: "input",
				name: descriptors.projectOwnerMail.name,
				message: descriptors.projectOwnerMail.prompt,
				default: "foo@bar.com"
			},
			{
				type: "input",
				name: descriptors.projectOwnerURL.name,
				message: descriptors.projectOwnerURL.prompt,
				default: "https://twitter.com/dsebastien"
			},
			{
				type: "input",
				name: descriptors.projectURL.name,
				message: descriptors.projectURL.prompt,
				default: "https://www.dsebastien.net"
			}
		];

		this.prompt(prompts, answers => {
			this.props = answers; // to access props later use this.props.someOption;

			done();
		});
	},

	configuring: {
		projectFiles: function () {
			// copy files that do not need pre-processing
			this.directory("./projectFiles/", ".");
		},

		projectTemplates: function () {
			const projectTemplatesFolder = "./projectTemplates/";

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
		applicationFiles: function () {
			// copy files that do not need pre-processing
			this.directory("./applicationFiles/", ".");
		},

		applicationTemplates: function () {
			const applicationTemplatesFolders = "./applicationTemplates/";

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

	install: function () {
		const skipInstall = this.options["skip-install"];

		this.log("Project created successfully. Enjoy!");

		if (skipInstall) {
			this.log("Run 'npm run setup' to install all required dependencies. Check out the README file instructions");
		} else {
			this.log("Go grab a coffee, I'll start installing the dependencies... (which may take a while)");
			this.spawnCommand("npm", ["run", "setup"]);
		}
	}

	// contexts: initializing, prompting, configuring, default, writing, conflicts, install, end
});

module.exports = modernWebDevGenerator;
