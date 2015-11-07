module.exports = {
	entry: "./src/Example.js",
	output: {
		path: "dist",
		filename: "bundle.js"
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