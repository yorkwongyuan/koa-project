import mongoose from '../config/DBHelper.js'
import moment from 'dayjs'
const Schema = mongoose.Schema
// const prodUrl = '106.55.51.93:12005'
// const devUrl = 'localhost:3000'
// const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl
// 定义了一个数据骨架
const UserSchema = new Schema({
  username: { type: String, index: { unique: true }, sparse: true },
  password: { type: String },
  name: { type: String },
  created: { type: String },
  updated: { type: String },
  favs: { type: Number, default: 100 },
  gender: { type: String, default: '' },
  roles: { type: Array, default: ['user'] },
  pic: { type: String, default: '/img/a.jpeg' },
  mobile: { type: String, match: /^1[3-9](\d{9})$/ },
  status: { type: String, default: '0' },
  regmark: { type: String, default: '' },
  location: { type: String, default: '' },
  isVip: { type: String, default: '0' },
  count: { type: Number, default: 0 }
})
// 钩子
UserSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})
UserSchema.pre('update', function (next) {
  this.updated = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

UserSchema.post('save', function (error, doc, next) {
  console.log('doc', doc)
  // 存在重复的数据
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Error: Mongoose has a duplicate key.'))
  } else {
    next(error)
  }
})

UserSchema.statics = {
  findByID: function (id) {
    // 通过id搜索数据,同时,username/password/mobile等数据不显示
    return this.findOne({ _id: id }, {
      username: 0,
      password: 0,
      mobile: 0
    })
  }
}
// model为连接collection的方法
const User = mongoose.model('users', UserSchema)

export default User
