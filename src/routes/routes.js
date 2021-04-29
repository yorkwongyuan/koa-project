import combineRouter from 'koa-combine-routers'
import publicRouter from './publicRouter'
import loginRouter from './loginRouter'

const router = combineRouter(publicRouter, loginRouter)

export default router
