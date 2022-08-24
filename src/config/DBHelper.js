import mongoose from 'mongoose'
import config from './index'
mongoose.set('useCreateIndex', true)
// mongoose.set('bufferCommands', true)
const EVENTS = {
  CONNECTED: 'connected',
  ERROR: 'error',
  DISCONNECTED: 'disconnected'
}
setTimeout(() => {
  // 创建连接
  mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, bufferCommands: false })
}, 1000)

// 连接成功
mongoose.connection.on(EVENTS.CONNECTED, () => {
  console.log('mongoose connected' + config.DB_URL)
})

// 连接异常
mongoose.connection.on(EVENTS.ERROR, (err) => {
  console.log(err)
})

// 断开连接
mongoose.connection.on(EVENTS.DISCONNECTED, () => {
  console.log('mongodb disconnected')
})
export default mongoose
