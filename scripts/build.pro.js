const path = require('path');

module.exports = {
	// mode: "development",
	mode: "production",
	entry: {
		main: path.join(__dirname, '../src/plugin.js')
	},
	output: {
		library: 'Flvh265',
		filename: 'videojs-flvh265.min.js',
		libraryTarget: "umd",
		path: path.join(__dirname, '../dist'),
		libraryExport: "default",
		globalObject: 'this',
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: "babel-loader",
		}, ],
	},
	externals: {
		"video.js": {
			umd: "video.js",
			amd: "video.js",
			commonjs: "video.js",
			commonjs2: "video.js",
			root: "videojs"
		},
		// "wx-inline-player-new":"WXInlinePlayer"
	},
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules']
	}
}