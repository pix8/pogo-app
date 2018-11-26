/* eslint-disable */
'use strict';

const	path 						= require('path'),
		config 						= require('./build/config');

const	webpack						= require('webpack'),
		merge 						= require('webpack-merge'),
		baseWebpackConfig 			= require('./webpack.base.config');

const	friendlyErrorsPlugin 		= require('friendly-errors-webpack-plugin');


// Add hot-reload related code to entry chunks
// DEVNOTE: this is basically setting up the HMR hooks for multiple entries
// Object.keys(baseWebpackConfig.entry).forEach( (name, i) => {
// 	baseWebpackConfig.entry[name] = ['./build/hmr-client'].concat(baseWebpackConfig.entry[name]);
// })

module.exports = merge(baseWebpackConfig, {
	mode: 'development',

	// DEVNOTE: eval-source-map is faster for development
	devtool: '#eval-source-map',
	
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': config.dev.env
		}),

		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.optimize.OccurrenceOrderPlugin(),	
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),

		new friendlyErrorsPlugin()
	]
})
