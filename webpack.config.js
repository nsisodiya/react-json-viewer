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
		"react": {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'React',
			root: 'React'
		},
		"react-dom": {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'ReactDOM',
			root: 'ReactDOM'
		}
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