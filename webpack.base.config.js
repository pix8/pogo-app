/* eslint-disable */
'use strict';

const 	ENV = process.env.NODE_ENV;

const 	path 						= require('path'),
		config 						= require('./build/config');

const	merge 						= require('webpack-merge'),
		reactWebpackConfig 			= require('./webpack.react.config'),
		vueWebpackConfig 			= require('./webpack.vue.config');


//module.exports = merge(reactWebpackConfig, vueWebpackConfig, {
module.exports = {
	entry: {
		//'scripts/app.bundle': path.resolve(__dirname, './src/js/main.es6')
						
		//browsersync
		'scripts/app.bundle': ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', path.resolve(__dirname, './src/js/index')]

		//webpackdev(standard)
		//'scripts/app.bundle': ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:3003/', path.resolve(__dirname, './src/js/index')]

		//DEVNOTE:
		//'webpack-hot-middleware/client' HMR server for/from webpack-hot-middleware
		//'webpack/hot/dev-server' is HMR server from webpackdevserver & not needed with webpack-hot-middleware
		//'webpack-dev-server/client' is the HMR client(equivalent to 'webpack-hot-middleware/client')
		//would use 'webpack/hot/dev-server', 'webpack-hot-middleware/client, combo turning the 'hot: true' option; if webpackdevserver with HMR via middleware

		//hmr options &noInfo=true&reload=true
	},

	//entry: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', './src/js'],

	output: {
		filename: '[name].js'
	},

	// resolveLoader: {
	// 	modules: [path.join(__dirname, '/node_modules')],
	// 	extensions: ['.js', '.jsx','.json']
	// },

	module: {
		rules: [
			// Javascript
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: (file) => (
					/node_modules/.test(file)
				)
			},

			// CSS & SASS
			// AND `<style>` blocks in `.vue` files(should be overridden by the vue-loader options)
			{
				test: /\.s?css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: () => [
								require('autoprefixer')('last 2 version'),
								//require('stylelint'),
								require('cssnano')()
							]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							//indentedSyntax: true,
							sourceMap: true
						}
					},
				],
				exclude:  /(node_modules|bower_components)/
			},

			// JSON
			{
				test: /\.json$/,
				use: {
					loader: 'json-loader'
				}
			},

			// GFX
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					query: {
						limit: 10000,
						name: '../src/img/[name].[hash:7].[ext]'
					}
				}
			},

			// Webfonts
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: {
					loader: 'url-loader',
					query: {
						limit: 10000,
						name: '../src/font/[name].[hash:7].[ext]'
					}
				}
			}
		]
	}
}
