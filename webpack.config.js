const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: path.join(__dirname, './src/main.js')
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: 'dist',
		filename: 'bundle.js'
	},
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules']
	},
	plugins: [
		new CopyPlugin({
			patterns: [{
					from: path.resolve('node_modules','./wx-inline-player-new/lib/'),
					to: path.join(__dirname, './dist/lib')
				}
			],
		}),
	],
}