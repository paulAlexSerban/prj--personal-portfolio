---
title: "SSG With Webpack and Handlebars"
category: "snippet"
status: "published"
repo_url: "https://github.com/paulAlexSerban/rnd--webpack"
tags:
  - "JavaScript"
  - "WebPack"
  - "Handlebars"
  - "SSG"
  - "Web Development"
  - "Front-end Build"
date: "May 15, 2019"
---

## File Structure
```bash
.
├── build
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── config.js
├── package.json
└── src
    ├── assets
    ├── frontend
    │   ├── js
    │   │   ├── components
    │   │   └── pages
    │   │       ├── about.js
    │   │       └── index.js
    │   └── scss
    │       ├── components
    │       └── pages
    │           ├── about.scss
    │           └── index.scss
    └── pages
        ├── about
        │   └── index.hbs
        ├── blog
        │   ├── index.hbs
        │   └── post
        │       └── index.hbs
        ├── contact
        │   └── index.hbs
        └── index.hbs
```

## `package.json`

```json
{
  "name": "webpack5-handlebars-setup",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "dev": "export NODE_ENV=development && webpack serve --config build/webpack.dev.js --hot --progress",
    "build": "export NODE_ENV=production && webpack --config build/webpack.prod.js"
  },
  "devDependencies": {
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/preset-env": "^7.20.2",
    "babel-loader": "^9.1.2",
    "clean-webpack-plugin": "^4.0.0",
    "copy-webpack-plugin": "^11.0.0",
    "css-loader": "^6.7.3",
    "eslint-plugin-import": "^2.27.5",
    "eslint-webpack-plugin": "^4.0.0",
    "handlebars-loader": "^1.7.3",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.7.2",
    "sass": "^1.58.1",
    "sass-loader": "^13.2.0",
    "source-map-loader": "^4.0.1",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  }
}


```

## `config.js`

```javascript
const path = require("path");

const NODE_ENV = process.env.NODE_ENV || "development";
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = { NODE_ENV, DIST_DIR, SRC_DIR };

```

## `webpack.common.js`

```javascript
// import required dependencies
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const constants = require("../config");
const ESLintPlugin = require("eslint-webpack-plugin");

// export webpack configuration
module.exports = {
	entry: {
		index: [
			path.join(constants.SRC_DIR, "frontend", "js", "pages", "index.js"),
			path.join(constants.SRC_DIR, "frontend", "scss", "pages", "index.scss"),
		],
		about: [
			path.join(constants.SRC_DIR, "frontend", "js", "pages", "about.js"),
			path.join(constants.SRC_DIR, "frontend", "scss", "pages", "about.scss"),
		],
	},
	output: {
		filename: "scripts/[name].js",
		path: constants.DIST_DIR,
		publicPath: "/",
		clean: true,
	},
	module: {
		rules: [
			{
				// use babel to transpile JavaScript code
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
			{
				// use handlebars to compile HTML templates
				test: /\.hbs$/,
				use: [
					{
						loader: "handlebars-loader",
					},
				],
			},
			{
				// use CSS and Sass loaders to compile CSS stylesheets
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
					"sass-loader",
				],
			},
			{
				// use asset modules to handle text assets
				test: /\.(txt)$/,
				type: "asset/source",
			},
		],
	},
	// configure plugins
	plugins: [
		// use eslint to lint JavaScript code
		new ESLintPlugin(),
		// extract CSS styles into separate files
		new MiniCssExtractPlugin({
			filename: "styles/[name].css",
		}),
		// clean the output directory before building
		new CleanWebpackPlugin(),
		// show progress during build process
		new webpack.ProgressPlugin(),
		// copy assets directory from one directory to another
		new CopyWebpackPlugin({
			patterns: [{ from: path.join(constants.SRC_DIR, "assets"), to: "assets/images" }],
		}),
		// generate HTML file using *.hbs files as source
		new HtmlWebpackPlugin({
			title: "Landing Page",
			template: path.join(constants.SRC_DIR, "pages", "index.hbs"),
			filename: path.join(constants.DIST_DIR, "index.html"),
			inject: false,
		}),
		new HtmlWebpackPlugin({
			title: "About Page",
			template: path.join(constants.SRC_DIR, "pages", "about", "index.hbs"),
			filename: path.join(constants.DIST_DIR, "about", "index.html"),
			inject: false,
		}),
	],
};

```

## `webpack.dev.js`
```javascript
// import required dependencies
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const constants = require("../config");

// export webpack configuration
module.exports = merge(common, {
	mode: constants.NODE_ENV,
	devtool: "source-map",
	devServer: {
		port: 9000,
		compress: true,
		static: {
			directory: constants.DIST_DIR,
		},
		devMiddleware: {
			index: "index.html",
			writeToDisk: true,
		},
		client: {
			overlay: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|svg)$/,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024,
					},
				},
				generator: {
					filename: "./images/[name][ext]",
				},
			},
		],
	},
});

```

## `webpack.prod.js`
```javascript
const { merge } = require("webpack-merge");
// import required dependencies
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const constants = require("../config");

// export webpack configuration
module.exports = merge(common, {
	mode: constants.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.(png|jpg|svg)$/,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 3 * 1024, // 3 kilobytes
					},
				},
				generator: {
					filename: "./images/[name][contenthash:12][ext]",
				},
				use: [
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								quality: 40,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new TerserPlugin({
			parallel: true,
			terserOptions: {
				ecma: 5,
				compress: { warnings: false },
				output: { comments: false },
			},
		}),
	],
});

```