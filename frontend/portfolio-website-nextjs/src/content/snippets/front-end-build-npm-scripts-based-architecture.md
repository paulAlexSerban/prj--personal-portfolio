---
title: "Front-end Build: NPM Scripts Based Architecture"
category: "snippet"
status: "published"
repo_url: "https://github.com/paulAlexSerban/rnd--javaScript/tree/main/fe-build-npm-scripts-prod-ready"
tags:
  - "JavaScript"
  - "Webpack"
  - "NPM"
  - "Front-end Development"
  - "Front-end Build"
date: "May 20, 2019"
---

## File Structure

```bash
.
├── .prettierignore
├── .prettierrc
├── package.json
├── postcss.config.js
├── src
│   ├── index.html
│   ├── js
│   │   ├── components
│   │   │   ├── footer.js
│   │   │   └── header.js
│   │   └── main.js
│   └── scss
│       ├── _base.scss
│       ├── _mixins.scss
│       ├── _nav.scss
│       └── main.scss
└── webpack.config.js
```

## `package.json`

```json
{
  "name": "fe-build-npm-scripts-prod-ready",
  "version": "1.0.0",
  "scripts": {
    "clean":"rm -rfv ./dist/*",
    "formats": "npx prettier --write src/**/*.js src/**/*.scss",
    "scss:watch": "sass --watch --update --style=expanded --color src/scss:dist",
    "scss:compile:dev": "sass --verbose  --style=expanded --color src/scss:dist",
    "scss:compile:prod": "sass --verbose --no-source-map --style=compressed --trace --color src/scss:dist",
    "scss:autoprefixer": "postcss --info -r dist/*.css",
    "js:lint": "eslint src/js/*.js --fix",
    "js:watch": "webpack serve --config webpack.config.js --hot",
    "js:transpile": "export NODE_ENV=production && webpack --config webpack.config.js",
    "build:scss":"npm run scss:compile:prod && npm run scss:autoprefixer",
    "build:js": "npm run js:lint && npm run js:transpile",
    "build:all": "npm run clean && npm run formats && npm run build:scss & npm run build:js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.21.0",
    "@babel/plugin-transform-arrow-functions": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "autoprefixer": "^10.4.13",
    "babel-loader": "^9.1.2",
    "eslint": "^8.34.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^15.6.1",
    "eslint-plugin-promise": "^6.1.1",
    "html-webpack-plugin": "^5.5.0",
    "postcss": "^8.4.21",
    "postcss-cli": "^10.1.0",
    "prettier": "^2.8.4",
    "sass": "^1.58.3",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  },
  "browserslist": {
    "production": [
      ">5%"
    ],
    "development": [
      "last 10 chrome version",
      "last 10 firefox version",
      "last 10 safari version",
      "last 10 ie version"
    ]
  }
}

```

## `webpack.config.js`

```js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
	entry: path.join(SRC_DIR, "js", "main.js"),
	output: {
		filename: "[name].js",
		path: DIST_DIR,
		publicPath: "",
		clean: false,
	},
	mode: NODE_ENV,
	devServer: {
		port: 9000,
		compress: true,
		static: {
			directory: DIST_DIR,
		},
		devMiddleware: {
			index: "index.html",
			writeToDisk: true,
		},
		client: {
			overlay: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                  },
                  "useBuiltIns": "usage",
                  "corejs": "3.6.5"
                }
              ]
            ],
            "plugins": ["@babel/plugin-transform-arrow-functions"]
					},
				},
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(SRC_DIR, "index.html"),
			filename: "index.html",
		}),
	],
};
```