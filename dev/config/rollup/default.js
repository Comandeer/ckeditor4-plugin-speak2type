import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const packageInfo = require( '../../../package.json' );

export default {
	entry: 'src/plugin.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		babel( {
			presets: [
				[ 'es2015', { modules: false } ]
			],
			plugins: [ 'external-helpers' ]
		} ),
		uglify( {
			comments: '/^/*!/',
			'source-map': './plugin.js.map'
		} )
	],
	banner: `/*! ${packageInfo.name} v${packageInfo.version} | (c) ${new Date().getFullYear()} ${packageInfo.author.name} | ${packageInfo.license} license (see LICENSE) */`,
	dest: `plugin.js`
};
