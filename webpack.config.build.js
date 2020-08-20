const path = require('path');

module.exports = {
	// mode: "development",
	mode: "production",
	entry: {
		main: path.join(__dirname, './src/plugin.js')
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: 'dist',
		filename: 'videojs-flvh265.js'
	},
	externals:{
		"video.js":"videojs",
		// "wx-inline-player-new":"WXInlinePlayer"
	},
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules']
	}
}