/**
 * @license Copyright (c) 2016, Comandeer. All rights reserved.
 * For licensing, see LICENSE.
 */

/**
 * @fileOverview Speak2type plugin.
 */

( function() {
	'use strict';

	var speechApi = window.speechRecognition || window.webkitSpeechRecognition;

	function createRecognition( editor ) {
		var recognition = new speechApi();
		
		recognition.continuous = true;
		recognition.maxAlternatives = 1;
		recognition.lang = editor.config.contentsLanguage || editor.langCode;

		recognition.addEventListener( 'result', function( evt ) {
			for( var i = evt.resultIndex; i < evt.results.length; i++ ) {
				editor.insertHtml( event.results[ i ][ 0 ].transcript + ' ' );
			}
		}, false );

		return recognition;
	}

	CKEDITOR.plugins.add( 'speak2type', {
		lang: 'en',

		init: function( editor ) {
			editor.addCommand( 'speak2type', {
				startDisabled: !speechApi,

				exec: function( editor ) {
					var cmd = this,
						recognition = cmd.recognition;

					if ( !speechApi ) {
						return;
					}

					if ( !recognition ) {
						cmd.recognition = recognition = createRecognition( editor );
					}

					if ( cmd.state === CKEDITOR.TRISTATE_OFF ) {
						cmd.setState( CKEDITOR.TRISTATE_ON );
						recognition.start();
					} else if ( CKEDITOR.TRISTATE_ON ) {
						cmd.setState( CKEDITOR.TRISTATE_OFF );
						recognition.stop();
					}
				}
			} );

			editor.ui.addButton( 'speak2type', {
				label: editor.lang.speak2type.label,
				command: 'speak2type',
				icon: CKEDITOR.env.hidpi ? this.path + 'icons/hidpi/speak2type.png' : this.path + 'icons/speak2type.png',
				toolbar: 'insert,0'
			} );

			editor.setKeystroke( [
				[ 120, 'speak2type' ], // F9
			] );
		}
	} );
	
} () );
