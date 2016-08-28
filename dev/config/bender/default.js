'use strict';

var appBaseDir = '/apps/ckeditor/plugins/speak2type/',
	testBaseDir = '/plugins/speak2type/tests/';

var config = {
	applications: {
		ckeditor: {
			path: '.',
			files: [
				'ckeditor.js'
			]
		}
	},

	framework: 'yui',

	plugins: [
		'benderjs-yui',
		'benderjs-sinon',
		'benderjs-jquery',
		'tests/_benderjs/ckeditor'
	],

	tests: {
		'Plugin tests': {
			applications: [ 'ckeditor' ],
			basePath: 'plugins/speak2type',
			paths: [
				'tests/**',
				'!**/_*/**'
			]
		}
	}
};

module.exports = config;
