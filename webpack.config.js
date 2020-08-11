var path=require('path');

module.exports={
    entry:{
		main:path.join(__dirname,'./src/main.js')
    },
    output:{
		path:path.join(__dirname,'./dist'),
		publicPath:'dist',
		filename:'bundle.js'
	},
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules']	 
	}
}