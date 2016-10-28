module.exports = {
  entry: {
    Example: "./src/Example.js",
    ReactJSONViewer: "./src/JSONViewer.js"
  },
  output: {
    path: "dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  eslint: {
    //fix: true,
    failOnWarning: false,
    failOnError: true,
    emitError: true,
    configFile: ".eslintrc",
    formatter: require("eslint/lib/formatters/stylish")
  },
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
