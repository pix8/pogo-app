/* eslint-disable */
'use strict';

const 	ENV = process.env.NODE_ENV;

const 	path 							= require('path'),
		config 							= require('./config');


module.exports = {
	mode: 'development',

	//entry: {
		//'scripts/app.bundle': path.resolve(__dirname, '../src/js/main.es6')

		//HMR explicit test HMR is working - HMR not suitable for production
		//'scripts/app.bundle': [path.resolve(__dirname, '../src/js/main.es6'), 'webpack-hot-middleware/client?reload=true']
		//'scripts/app.bundle': [path.resolve(__dirname, '../src/js/main.es6'), 'webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true&reload=true']
		//'scripts/app.bundle': ['webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true&reload=true', path.resolve(__dirname, '../src/js/main.es6')]
		//'scripts/app.bundle': [path.resolve(__dirname, '../src/js/main.es6'), 'webpack/hot/dev-server', 'webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true&reload=true']
		//'scripts/app.bundle': ['webpack/hot/dev-server', 'webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true&reload=true', path.resolve(__dirname, '../src/js/main.es6')]
		//'scripts/app.bundle': ['webpack/hot/dev-server', 'webpack-hot-middleware/client?noInfo=true', path.resolve(__dirname, '../src/js/main.es6')]
		
		//'hmr': 'webpack/hot/dev-server',
		//'scripts/app.bundle': ['webpack-hot-middleware/client?noInfo=true', path.resolve(__dirname, '../src/js/main.es6.js')]
	//},

	//entry: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', '../src/js/main.es6'],
	entry: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', '../src/js/index'],

	output: {
		filename: '[name].js'
	},

	// resolve: {
	// 	extensions: ['', '.js', '.jsx', '.vue', '.json'],
				
	// 	alias: {
	// 		'src': path.resolve(__dirname, '../src/'),
	// 		'components': path.resolve(__dirname, '../src/components')
	// 	}
	// },

	// resolveLoader: {
	// 	modules: [path.join(__dirname, '../node_modules')],
	// 	extensions: ['.js', '.jsx','.json']
	// },

	module: {
		rules: [
			// Javascript + React
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: path.resolve(__dirname, 'node_modules/')
			},

			// Styled components
			// {
			// 	test: /\.style.js$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader'
			// 		},
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				importLoaders: 2
			// 			}
			// 		},
			// 		{
			// 			loader: 'postcss-loader',
			// 			options: {
			// 				parser: 'postcss-js'
			// 			}
			// 		},
			// 		{
			// 			loader: 'babel-loader'
			// 		}
			// 	]
			// },

			// VUE
			// {
			// 	test: /\.vue?$/,
			// 	use: {
			// 		loader: 'vue-loader'
			// 	},
			// 	exclude: path.resolve(__dirname, 'node_modules/')
			// },

			// CSS & SASS
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
							sourceMap: true
						}
					},
				],
				exclude: path.resolve(__dirname, 'node_modules/')
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
