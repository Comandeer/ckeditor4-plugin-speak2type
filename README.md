# Speak2type

This is simple plugin for CKEditor 4, adding the ability to type into the editor using speech.

## Usage

Click the microphone button and speak to your microphone. Your words should appear as the content in the editor.

## Compatibility

It's compatible with latest Chrome and Safari versions. It should also work in Firefox after activating proper experimental flag.

## Hacking around

First install `speak2type` as a part of CKEditor 4 dev repository:

```bash
cd PATH_TO_CKEDITOR_DEV/plugins
git clone git@github.com:cksource/ckeditor4-plugin-speak2type.git speak2type
npm install
```

Then run bender:

```bash
npm test
```

and go to http://localhost:1030 to run the tests.

## License

The plugin is licensed under [MIT license](https://opensource.org/licenses/MIT).

The icon used in the plugin is under [CC-BY license](https://creativecommons.org/licenses/by/4.0/legalcode).
