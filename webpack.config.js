var webpack = require('webpack');
module.exports = {
	entry: './src/index.js',
	target: "node",
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
	}
}