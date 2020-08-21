const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: "development",//打包为开发模式
	entry: {
		main: path.join(__dirname, './src/main.js')
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: 'dist',
		filename: 'index.js'
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