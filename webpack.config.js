module.exports = {
	entry: {
		Example: "./src/Example.js",
		ReactJSONViewer: "./src/JSONViewer.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: "babel",
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};