var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		'filename': 'dist/bundle-min.js'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
			}
		}
		]
	},
	plugins: [
    	new UglifyJSPlugin()
	]

}