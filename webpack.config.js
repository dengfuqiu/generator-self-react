const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/bundle'),
    publicPath: '/bundle'
  },
  devServer: {
    port: 40000,
    hot: true,
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: 'css-loader'
      },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}