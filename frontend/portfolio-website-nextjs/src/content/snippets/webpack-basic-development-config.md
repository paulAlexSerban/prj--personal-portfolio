---
title: "Webpack: Basic Development Configuration"
category: "snippet"
status: "published"
tags:
  - "JavaScript"
  - "Webpack"
  - "Front-end Development"
  - "Front-end Build"
date: "May 15, 2019"
---

## File Structure

```bash
.
├── package.json
├── src
│   ├── index.html
│   └── index.js
└── webpack.config.js

```

## `package.json`

```json
{
	"name": "webpack5-basic-developemnt-setup",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"dev": "export NODE_ENV=development && webpack serve --config webpack.config.js --hot",
		"build": "export NODE_ENV=production && webpack --config webpack.config.js"
	},
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@babel/preset-env": "^7.20.2",
		"babel-loader": "^9.1.2",
		"html-webpack-plugin": "^5.5.0",
		"webpack": "^5.75.0",
		"webpack-cli": "^5.0.1",
		"webpack-dev-server": "^4.11.1"
	}
}
```

## `webpack.config.js`


### With comments
```javascript
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Create constants for node environment and output directory
const nodeEnv = process.env.NODE_ENV || "development";
const distDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");

// Export webpack configuration object
module.exports = {
	// Set the entry point of the application to be 'index.js' located in the 'src' directory
	entry: path.join(srcDir, "index.js"),

	// Define the output of the build process
	output: {
		// Set the filename of the output bundle to be 'bundle.js'
		filename: "bundle.js",
		// Set the output directory to be the 'dist' directory
		path: distDir,
		// Set the public path to be an empty string
		publicPath: "",
		// Set the 'clean' option to true
		clean: true,
	},

	// Set the mode of the build process (development or production)
	mode: nodeEnv,

	// Define the dev server configuration
	devServer: {
		// Set the port for the dev server to be 9000
		port: 9000,
		// Enable compression for the dev server
		compress: true,
		// Define the static directory to be the 'dist' directory
		static: {
			directory: distDir,
		},
		// Define the devMiddleware configuration
		devMiddleware: {
			// Set the index file to be 'index.html'
			index: "index.html",
			// Enable writing to disk for devMiddleware
			writeToDisk: true,
		},
		// Define the client configuration
		client: {
			// Enable overlay for the client
			overlay: true,
		},
	},
	// Define the module rules for webpack
	module: {
		rules: [
			// Define the rule for transpiling .js files using Babel
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	// Define the plugins to use with webpack
	plugins: [
		// Use the webpack progress plugin
		new webpack.ProgressPlugin(),
		// Use the HTML webpack plugin to generate an index.html file
		new HtmlWebpackPlugin({
			// Set the template for the HTML webpack plugin to be 'index.html' located in the 'src' directory
			template: path.join(srcDir, "index.html"),
			filename: "index.html",
		}),
	],
};

```

### Without comments

```javascript
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || "development";
const distDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");

module.exports = {
	entry: path.join(srcDir, "index.js"),
	output: {
		filename: "bundle.js",
		path: distDir,
		publicPath: "",
		clean: true,
	},
	mode: nodeEnv,
	devServer: {
		port: 9000,
		compress: true,
		static: {
			directory: distDir,
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
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(srcDir, "index.html"),
			filename: "index.html",
		}),
	],
};

```