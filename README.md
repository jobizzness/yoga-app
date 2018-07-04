<img src="https://i.imgur.com/wWjqhW6.jpg" width="530">

[![GitHub release](https://img.shields.io/github/release/PolymerX/polymer-skeleton.svg?style=flat-square)](https://github.com/PolymerX/polymer-skeleton)
[![Build Status](https://travis-ci.org/PolymerX/polymer-skeleton.svg?style=flat-square&branch=master)](https://travis-ci.org/PolymerX/polymer-skeleton)
[![GitHub issues](https://img.shields.io/github/issues/PolymerX/polymer-skeleton.svg?style=flat-square)](https://github.com/PolymerX/polymer-skeleton/issues)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![Polymer Skeleton](https://img.shields.io/badge/polymerX-SKELETON-435877.svg?style=flat-square)](https://github.com/PolymerX/polymer-skeleton)

> A mininum boilerplate to deliver a Polymer 3.x with Webpack, PostCSS and Service Workers ready.

## Features

* [Webpack](https://webpack.js.org/) 4
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with hot reloading active.
* [PostCSS](http://postcss.org/) with many plugins.
* Service Workers generated by [Workbox](https://workboxjs.org/) through the [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin) (just for `build`)
* Copy statics file on `dist` folder (like `vendor/webcomponents-loader.js` and others)
* [standard-version](https://github.com/conventional-changelog/standard-version) is bundled for managing versioning and changelogs.
* **ES6 modules bundle and ES5 transpiled bundle** both handled using the new `nomodule` and `type=module` feature of modern browsers. [Learn more on how to ship ES6 modules today in production](https://www.youtube.com/watch?v=GWmO88hBbKY).

#### Loaders

* [babel-loader](https://github.com/babel/babel-loader) with the [babel-preset-env](https://github.com/babel/babel-preset-env) enabled for the [**last 2 versions**](https://babeljs.io/docs/plugins/preset-env/) and babel-plugin-transform-object-rest-spread installed.
* [text-loader](https://github.com/dfenstermaker/text-loader) - Load HTML templates as string.
* [postcss-loader](https://github.com/postcss/postcss-loader) - Load PostCSS into the `<style>` scoped tag of Polymer elements as string.


## Supported Browsers

All modern browsers. 🕶

But as the features said, we are also transpiling the bundle for "oldie" browsers. Of course we are not covering things like IE11.

## Usage

Clone this repository:

```bash
git clone https://github.com/PolymerX/polymer-skeleton [your-app-name]
```

Remove the `.git` folder and change details within:

* `package.json`
* `src/manifest.json`

Then start building your application!

```bash
yarn
```

#### Developing

Start the `webpack-dev-server` on localhost `http://localhost:3000` with hot-reload and watch on `.pcss` files.

For "oldie" browsers, transpiling also Javascript `class`. Works on `Firefox`:

```bash
yarn dev
```

For modern browsers with `class` support. Works on `Chrome`, `Safari`, and `Edge`:

```bash
yarn dev:module
```

#### Test

XO for code style, Stylelint for PostCSS linting, and WCT for components tests:

```bash
yarn test
```

Run [Lighthouse](https://github.com/GoogleChrome/lighthouse) for testing the PWA capabilities:

```bash
yarn test:lighthouse
```

#### Build

(Almost) production-ready (`webpack --optimize-minimze` and copy statics) to `dist` folder. Also generating Service Workers. The command will also create the `module` version of the `bundle` ready to be loaded as `type=module`.

```bash
yarn build
```


## Styling components with PostCSS

During development `.pcss` files will be watched, compiled and injected to the relative `<style>` tag within the component template. The CSS is scoped to the component so don't worry about CSS specificity, you can also use `:host`, `:host-context` and `:root` selectors. Read more about [styling web components](https://www.polymer-project.org/2.0/docs/devguide/style-shadow-dom) and [custom CSS properties](https://www.polymer-project.org/2.0/docs/devguide/custom-css-properties).

We also include Autoprefixer plugin, if you don't know how it works (...and you should), it allows you to write CSS without worrying about vendor prefixes. Just write your css properties prefix-free and let autoprefixer do the work for you when compiling.

**How about commons styles?**
You can simply `import` any other `.pcss` file within your main component `.js` file and print it inside the `template()`.


## [**@webcomponents/webcomponentsjs**](https://github.com/webcomponents/webcomponentsjs)

We are getting the `webpcomponents-loader.js` polyfill from GitHub using NPM/Yarn and copying it into a `vendor` folder with a `Node` script.


## custom-element-es5-adpater.js

Loading the `custom-element-es5-adapter.js` is necessary because the `custom elements` [known(1)](https://stackoverflow.com/questions/43520535/class-constructor-polymerelement-cannot-be-invoked-without-new/45097891#45097891) [issue(2)](https://github.com/webcomponents/custom-elements#es5-vs-es2015) (the lovely `Uncaught TypeError: Class constructor PolymerElement cannot be invoked without 'new'`) about ES6 `classes`, but just on **old browsers**.


## Contributors

| Name                      | Website                  |
| ------------------------- | ------------------------ |
| **Alessio Occhipinti**    | <https://godev.space>    |
| **Mattia Astorino**       | <http://equinsuocha.io/> |


## License

PolymerX © MIT
