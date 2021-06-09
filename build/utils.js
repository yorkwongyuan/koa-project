const path = require('path')

exports.resolve = function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

exports.SRC_PATH = exports.resolve('src')
exports.DIST_PATH = exports.resolve('dist')

exports.getWebpackResolveConfig = function (customAlias = {}) {
  const APP_PATH = exports.resolve('src')
  return {
    modules: [APP_PATH, 'node_modules'],
    extensions: ['.js', '.json'],
    alias: {
      '@': APP_PATH,
      ...customAlias
    }
  }
}
