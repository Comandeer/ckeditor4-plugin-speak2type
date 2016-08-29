#!/usr/bin/env node

'use strict';

const fs = require( 'fs' );
const path = require( 'path' );

const pluginPath = path.resolve( __dirname, './../..' );
const CKEPath = path.resolve( pluginPath, './../..' );
const configPath = path.resolve( CKEPath, 'config.js' );

const packageInfo = require( path.resolve( pluginPath, 'package.json' ) );
const pluginName = packageInfo.name.replace( 'ckeditor4-plugin-', '' );

if ( !fs.existsSync( path.resolve( CKEPath, 'ckeditor.js' ) ) ) {
	process.exit( 0 );
}

fs.unlinkSync( path.resolve( CKEPath, `plugins/${ pluginName }` ) );

// Update config.
let config = fs.readFileSync( configPath, 'utf8' );

config = config.replace( `;CKEDITOR.editorConfig = function( config ) {
	config.plugins += ',${ pluginName }';
}`, '' );

fs.writeFileSync( configPath, config, 'utf8' );

process.exit( 0 );
