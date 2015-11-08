module.exports = {
	entry: {
		example: "./src/Example.js",
		ReactJsonViewer: "./src/JSONViewer.js"
	},
	output: {
		path: "dist",
		filename: "[name].js"
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