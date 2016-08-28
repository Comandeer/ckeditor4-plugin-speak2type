const SpeechAPI = window.speechRecognition || window.webkitSpeechRecognition;
const isSupported = !!SpeechAPI;

function createRecognition( editor ) {
	const recognition = new SpeechAPI();

	recognition.continuous = true;
	recognition.maxAlternatives = 1;
	recognition.lang = editor.config.contentsLanguage || editor.langCode;

	recognition.addEventListener( 'result', ( evt ) => {
		for ( let i = evt.resultIndex; i < evt.results.length; i++ ) {
			editor.insertHtml( `${ event.results[ i ][ 0 ].transcript } ` );
		}
	}, false );

	return recognition;
}

export { isSupported };
export { createRecognition };
