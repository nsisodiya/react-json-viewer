module.exports = {
  entry: './src/Example.js',
  devServer: {
    publicPath: '/',
    contentBase: './demo',
    port: 8900,
    historyApiFallback: true,
    hot: false,
    progress: true,
    open: true
  },
  output: {
    path: `${__dirname}/demo`,
    filename: 'bundle.js'
  },
  //TODO - disable source map in production
  devtool: 'source-map',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
