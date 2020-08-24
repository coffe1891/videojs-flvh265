const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		main: path.join(__dirname, './src/main.js')
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: 'dist',
		filename: 'index.js'
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: "babel-loader",
		}, ],
	},
	plugins: [
		// new CopyPlugin({
		// 	patterns: [{
		// 			from: path.resolve('node_modules','./wx-inline-player-new/lib/'),
		// 			to: path.join(__dirname, './dist/lib')
		// 		}
		// 	],
		// }),
	],
}