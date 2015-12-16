// Karma configuration
// reference: http://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		//basePath: ".tmp/",

		plugins: [
			"karma-jspm",
			"karma-jasmine",
			"karma-phantomjs-launcher",
			"karma-chrome-launcher",
			"karma-firefox-launcher",
			"karma-ie-launcher",
			"karma-junit-reporter",
			"karma-spec-reporter"
		],

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			"jspm",
			"jasmine"
		],

		// list of files / patterns to load in the browser (loaded before SystemJS)
		files: [],

		// list of files to exclude
		exclude: [],

		// list of paths mappings
		// can be used to map paths served by the Karma web server to /base/ content
		// knowing that /base corresponds to the project root folder (i.e., where this config file is located)
		proxies: {
			"/.tmp": "/base/.tmp" // without this, karma-jspm can't load the files
		},

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},

		// test results reporter to use
		// possible values: 'dots', 'progress', 'spec', 'junit'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		// https://www.npmjs.com/package/karma-junit-reporter
		// https://www.npmjs.com/package/karma-spec-reporter
		reporters: ["spec"],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			"PhantomJS"
			//"Chrome",
			//"Firefox",
			//"PhantomJS",
			//"IE"
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		junitReporter: {
			outputFile: "target/reports/tests-unit/unit.xml",
			suite: "unit"
		},

		// doc: https://www.npmjs.com/package/karma-jspm
		// reference config: https://github.com/gunnarlium/babel-jspm-karma-jasmine-istanbul
		jspm: {
			// Path to your SystemJS/JSPM configuration file 
			config: "jspm.conf.js",

			// Where to find jspm packages
			//packages: "jspm_packages",

			// One use case for this is to only put test specs in loadFiles, and jspm will only load the src files when and if the test files require them.
			loadFiles: [
				// load all tests
				".tmp/*.spec.js", // in case there are tests in the root folder
				".tmp/**/*.spec.js"
			],

			// Make additional files/a file pattern available for jspm to load, but not load it right away.
			serveFiles: [
				".tmp/**/!(*.spec).js" // make sure that all files are available
			],

			// SystemJS configuration specifically for tests, added after your config file. 
			// Good for adding test libraries and mock modules
			paths: {}
		}
	});
};
