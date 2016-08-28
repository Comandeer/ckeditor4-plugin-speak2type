/* global CKEDITOR */

/**
 * @license Copyright (c) 2016, Comandeer. All rights reserved.
 * For licensing, see LICENSE.
 */

/**
 * @fileOverview Speak2type plugin.
 */

import { createRecognition } from './speechAPI';
import { isSupported } from './speechAPI';

CKEDITOR.plugins.add( 'speak2type', {
	lang: 'en',

	init( editor ) {
		editor.addCommand( 'speak2type', {
			startDisabled: !isSupported,

			exec( editor ) {
				const cmd = this;
				let recognition = cmd.recognition;

				if ( !isSupported ) {
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
			icon: CKEDITOR.env.hidpi ? `${ this.path }icons/hidpi/speak2type.png` : `${ this.path }icons/speak2type.png`,
			toolbar: 'insert,0'
		} );

		editor.setKeystroke( [
			[ 120, 'speak2type' ] // F9
		] );
	}
} );
