const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: {children: false}
})