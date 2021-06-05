import combineRouter from 'koa-combine-routers'
import path from 'path'
const requireContext = require('require-context')
const modules = requireContext(path.resolve(__dirname, './files'), true, /\.js$/)
const files = modules.keys().reduce((item, path) => {
  const value = modules(path)
  item.push(value.default)
  return item
}, [])
const router = combineRouter(files)
console.log('1')
export default router
