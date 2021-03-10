const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
debugger
const webpackConfig = {
  target: "node",
  mode: "development",
  entry: {
    server: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: path.join(__dirname, './node_modules')
    }]
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  node: {
    console: true,
    path: true,
    setImmediate: true,
    __dirname: true,
    __filename: true,
    process: true,
    global: true,
    Buffer: true
  }
}

module.exports = webpackConfig