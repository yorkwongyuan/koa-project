import combineRouter from 'koa-combine-routers'
import requireContext from 'require-context'
import path from 'path'
const modules = requireContext(path.resolve(__dirname, './modules'), true, /\.js$/)
const files = modules.keys().reduce((item, path) => {
  const value = modules(path)
  item.push(value.default)
  return item
}, [])
const router = combineRouter(files)

export default router
