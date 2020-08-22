const path = require('path');

module.exports = {
	mode: "development",
	// mode: "production",
	entry: {
		main: path.join(__dirname, '../src/plugin.js')
	},
	output: {
		library: 'Flvh265',
		filename: 'videojs-flvh265.js',
		libraryTarget: "umd",
		path: path.join(__dirname, '../dist'),
		libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
		globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
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