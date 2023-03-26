---
title: "Webpack: Basic Production Ready Config"
category: "snippet"
status: "draft"
repo_url: "https://github.com/paulAlexSerban/rnd--webpack"
tags:
  - "JavaScript"
  - "Webpack"
  - "Front-end Development"
  - "Front-end Build"
date: "May 16, 2019"
---

## File Structure

```bash
.
├── assets
│   ├── images
│   │   ├── delete.png
│   │   └── header-image.jpg
│   └── svgs
│       └── checkmark.svg
├── package.json
├── src
│   ├── index.html
│   ├── index.js
│   ├── javascript
│   │   ├── data.js
│   │   ├── event-handlers.js
│   │   └── ui.js
│   └── styles
│       └── index.css
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

## `package.json`
```json
{
	"name": "webpack5-basic-production-ready-config",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"dev": "export NODE_ENV=development && webpack serve --config webpack.dev.js --hot",
		"build": "export NODE_ENV=production && webpack --config webpack.prod.js"
	},
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@babel/preset-env": "^7.20.2",
		"babel-loader": "^9.1.2",
		"css-loader": "^6.7.3",
		"html-loader": "^4.2.0",
		"html-webpack-plugin": "^5.5.0",
		"image-webpack-loader": "^8.1.0",
		"mini-css-extract-plugin": "^2.7.2",
		"webpack": "^5.75.0",
		"webpack-cli": "^5.0.1",
		"webpack-dev-server": "^4.11.1",
		"webpack-merge": "^5.8.0"
	}
}

```

## `webpack.common.js`

```javascript
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const distDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");

module.exports = {
	entry: path.join(srcDir, "index.js"),
	output: {
		path: distDir,
		filename: "[name].[contenthash:12].js",
		publicPath: "",
		clean: true,
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
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(srcDir, "index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash:12].css",
		}),
	],
};
```

## `webpack.dev.js`

```javascript
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const nodeEnv = process.env.NODE_ENV || "development";
const distDir = path.resolve(__dirname, "dist");

module.exports = merge(common, {
	mode: nodeEnv,
	devtool: "inline-source-map",
	devServer: {
		port: 9000,
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
const common = require("./webpack.common.js");

const nodeEnv = process.env.NODE_ENV || "development";

module.exports = merge(common, {
	mode: nodeEnv,
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
});
```
