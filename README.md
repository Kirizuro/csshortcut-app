# CSShortcut APP

> Projeto Cool

## Stack

- Task Runner: [Gulp](http://gulpjs.com)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com)

## Run the Project locally

**1 -** Prepare the environment:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:

```sh
$ git clone https://github.com/Kirizuro/csshortcut-app.git
$ cd csshortcut-app
$ yarn install
```

**3 -** Run static server and livereload:

```sh
$ gulp server
```

## Folder Structure

.
|-- README.md
|-- LICENSE.md
|-- CONTRIBUTING.md
|-- out/
|-- src/
| |-- icons/
| |-- assets/
| | |-- img/
| | |-- scripts/
| | | |-- script.js
| | |-- styles/
| | |-- modules/
| | |-- style.styl
| |-- partials/
| | |-- footer.pug
| | |-- header.pug
| |-- layouts/
| | |-- default.pug
| |-- projects.pug
| |-- index.pug
|-- gulpfile.js
|-- package.json
|-- projects.json
|-- .editorconfig
|-- .gitignore

## Automatic Tasks

- `$ gulp build:` Compile, concat and minify all files.
- `$ gulp server:` Watch the files to build and start a static server.
- `$ gulp deploy:` Deploy for gh-pages.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [roadmap](https://github.com/csshortcut/csshortcut-app/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/csshortcut/csshortcut-app/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/csshortcut/csshortcut-app/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
