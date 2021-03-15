const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {SRC_PATH, DIST_PATH} = require('./utils')

const webpackConfig = {
  target: "node",
  entry: {
    server: SRC_PATH
  },
  output: {
    filename: '[name].js',
    path: DIST_PATH
  },
  resolve: {
    alias: {
      '@': SRC_PATH
    }
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: path.join(__dirname, '../node_modules')
    }]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(), 
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
      }
  })]
}

module.exports = webpackConfig
// node: {
//   console: true,
//   path: true,
//   setImmediate: true,
//   __dirname: true,
//   __filename: true,
//   process: true,
//   global: true,
//   Buffer: true
// }