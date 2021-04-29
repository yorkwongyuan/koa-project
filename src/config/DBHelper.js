import mongoose from 'mongoose'
import config from './index'

const EVENTS = {
  CONNECTED: 'connected',
  ERROR: 'error',
  DISCONNECTED: 'disconnected'
}
mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// 连接成功
mongoose.connection.on(EVENTS.CONNECTED, () => {
  console.log('mongodb connected')
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
