const Koa = require('koa')
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import cors from '@koa/cors'
import json from 'koa-json'
import body from 'koa-body'
import compress from 'koa-compress'
import routers from './routes/routes'
import compose from 'koa-compose'
import JWT from 'koa-jwt'
import config from './config/index'
import ErrorHandler from './common/ErrorHandler'
const app = new Koa()

const jwt = JWT({secret: config.JWT_SECRET}).unless({path: [/^\/public/]})
const middleWare = compose([
  body(),
  json({pretty: true, param: 'pretty'}),
  cors(),
  statics(path.join(__dirname, '../public')),
  helmet(),
  ErrorHandler,
  jwt
])

const isDevMode = process.env.NODE_ENV === 'production' ? false : true
if (!isDevMode) {
  app.use(compress())
}
app.use(middleWare)
app.use(routers())

app.listen(3000)