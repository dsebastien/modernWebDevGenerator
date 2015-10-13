"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _yeomanGenerator = require("yeoman-generator");

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _yosay = require("yosay");

var _yosay2 = _interopRequireDefault(_yosay);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var descriptors = {
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

var modernWebDevGenerator = _yeomanGenerator2["default"].Base.extend({

	constructor: function constructor() {
		_yeomanGenerator2["default"].Base.apply(this, arguments);

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

	prompting: function prompting() {
		var _this = this;

		var done = this.async();

		this.log((0, _yosay2["default"])("Welcome to the " + _chalk2["default"].green("ModernWebDev") + " Yeoman Generator"));

		var prompts = [{
			type: "input",
			name: descriptors.projectName.name,
			message: descriptors.projectName.prompt,
			"default": this.appname }, {
			type: "input",
			name: descriptors.projectShortName.name,
			message: descriptors.projectShortName.prompt,
			"default": this.appname }, {
			type: "input",
			name: descriptors.projectDescription.name,
			message: descriptors.projectDescription.prompt,
			"default": "Created by the ModernWebDev Yeoman Generator"
		}, {
			type: "input",
			name: descriptors.projectOwner.name,
			message: descriptors.projectOwner.prompt,
			"default": "nobody"
		}, {
			type: "input",
			name: descriptors.projectOwnerRole.name,
			message: descriptors.projectOwnerRole.prompt,
			"default": "Project Lead"
		}, {
			type: "input",
			name: descriptors.projectOwnerMail.name,
			message: descriptors.projectOwnerMail.prompt,
			"default": "foo@bar.com"
		}, {
			type: "input",
			name: descriptors.projectOwnerURL.name,
			message: descriptors.projectOwnerURL.prompt,
			"default": "https://twitter.com/dsebastien"
		}, {
			type: "input",
			name: descriptors.projectURL.name,
			message: descriptors.projectURL.prompt,
			"default": "https://www.dsebastien.net"
		}];

		this.prompt(prompts, function (answers) {
			_this.props = answers;

			done();
		});
	},

	configuring: {
		projectFiles: function projectFiles() {
			this.directory("./projectFiles/", ".");
		},

		projectTemplates: function projectTemplates() {
			var projectTemplatesFolder = "./projectTemplates/";

			this.fs.copyTpl(this.templatePath(projectTemplatesFolder + "package.json"), this.destinationPath("package.json"), this.props);
			this.fs.copyTpl(this.templatePath(projectTemplatesFolder + "README.md"), this.destinationPath("README.md"), this.props);
		}
	},

	writing: {
		applicationFiles: function applicationFiles() {
			this.directory("./applicationFiles/", ".");
		},

		applicationTemplates: function applicationTemplates() {
			var applicationTemplatesFolders = "./applicationTemplates/";

			this.fs.copyTpl(this.templatePath(applicationTemplatesFolders + "app/index.html"), this.destinationPath("app/index.html"), this.props);
			this.fs.copyTpl(this.templatePath(applicationTemplatesFolders + "app/humans.txt"), this.destinationPath("app/humans.txt"), this.props);
			this.fs.copyTpl(this.templatePath(applicationTemplatesFolders + "app/manifest.json"), this.destinationPath("app/manifest.json"), this.props);
			this.fs.copyTpl(this.templatePath(applicationTemplatesFolders + "app/manifest.webapp"), this.destinationPath("app/manifest.webapp"), this.props);
		}
	},

	install: function install() {
		var skipInstall = this.options["skip-install"];

		this.log("Project created successfully. Enjoy!");

		if (skipInstall) {
			this.log("Run 'npm run setup' to install all required dependencies. Check out the README file instructions");
		} else {
			this.spawnCommand("npm", ["run", "setup"]);
		}
	}

});

module.exports = modernWebDevGenerator;