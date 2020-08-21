const path = require('path');

module.exports = {
	mode: "development",
	// mode: "production",
	entry: {
		main: path.join(__dirname, '../src/plugin.js')
	},
	output: {
		library: 'videojsFlvh265',
		filename: 'videojs-flvh265.script.js',
		libraryTarget: "var",
		path: path.join(__dirname, '../dist'),
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: "babel-loader",
		}, ],
	},
	externals: {
		"video.js": "videojs",
		// "wx-inline-player-new":"WXInlinePlayer"
	},
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules']
	}
}