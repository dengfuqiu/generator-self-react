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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]'
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]'
            }
          },
          'sass-loader'
        ]
      },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}
