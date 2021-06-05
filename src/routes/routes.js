import combineRouter from 'koa-combine-routers'
import loginRouter from './files/loginRouter'
import publicRouter from './files/publicRouter'
import userRouter from './files/userRouter'
// import path from 'path'
// const requireContext = require('require-context')
// const modules = requireContext(path.resolve(__dirname, './files'), true, /\.js$/)
// modules.keys().reduce((item, path) => {
//   const value = modules(path)
//   item.push(value.default)
//   return item
// }, [])
const router = combineRouter(loginRouter, publicRouter, userRouter)
console.log('1')
export default router
