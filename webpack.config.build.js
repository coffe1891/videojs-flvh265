const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		main: path.join(__dirname, './src/plugin.js')
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: 'dist',
		filename: 'videojs-flvh265.js'
	},
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules']
	}
}