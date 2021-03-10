import webpackMerge from 'webpack-merge'
import webpackBaseConfig from './webpack.config.base'
module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: {children: false}
})