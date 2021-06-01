import combineRouter from 'koa-combine-routers'
import publicRouter from './publicRouter'
import loginRouter from './loginRouter'
import userRouter from './userRouter'

const router = combineRouter(publicRouter, loginRouter, userRouter)

export default router
