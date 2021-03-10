const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  stats: {children: false, warnings: false},
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,
            drop_debugger: true,
            dead_code: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true
    })],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  },
})