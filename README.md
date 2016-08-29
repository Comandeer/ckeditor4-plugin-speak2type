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
git clone git@github.com:Comandeer/ckeditor4-plugin-speak2type.git speak2type
npm install
```

Then run bender:

```bash
npm test
```

and go to http://localhost:1030 to run the tests.

## Installing

If you just want to install the plugin and use it in your editor, simply do:

```bash
cd PATH_TO_CKEDITOR
npm install [--save] ckeditor4-plugin-speak2type
```

The plugin would be downloaded, symlinked into your CKEditor's `plugins` directory and added to your `config.js`. That's it – plugin is ready to be used!

## Removing

If you want to uninstall the plugin, simply do:

```bash
cd PATH_TO_CKEDITOR
npm remove [--save] ckeditor4-plugin-speak2type
```

The plugin would be deleted along with the symlink and entry from your `config.js`.

## License

The plugin is licensed under [MIT license](https://opensource.org/licenses/MIT).

The icon used in the plugin is under [CC-BY license](https://creativecommons.org/licenses/by/4.0/legalcode).
