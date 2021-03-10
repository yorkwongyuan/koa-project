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


const app = new Koa()

const middleWare = compose([
  body(),
  json({pretty: true, param: 'pretty'}),
  cors(),
  statics(path.join(__dirname, '../public')),
  helmet()
])

const isDevMode = process.env.NODE_ENV === 'production' ? false : true
if (!isDevMode) {
  app.use(compress())
}
app.use(middleWare)
app.use(routers())

app.listen(3000)