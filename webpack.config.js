var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		'filename': 'dist/bundle-min.js'
	},
	module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015'],
	      }
	    }]
	},
	plugins: [
    	new UglifyJSPlugin()
	]

}