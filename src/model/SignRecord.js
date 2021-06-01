import mongoose from '../config/DBHelper'
import moment from 'dayjs'
const Schema = mongoose.Schema
// const prodUrl = '106.55.51.93:12005'
// const devUrl = 'localhost:3000'
// const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl
// 定义了一个数据骨架
const SignRecordSchema = new Schema({
  uid: { type: String, ref: 'users' },
  created: { type: Date },
  favs: { type: Number },
  last_sign: { type: Date }

})
// 钩子
SignRecordSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

// schema的静态方法
SignRecordSchema.statics = {
  findByUid: function (uid) {
    this.findOne({ uid }).sort({ created: -1 })
  }
}

// model为连接collection的方法
const SignRecord = mongoose.model('sing_record', SignRecordSchema)

export default SignRecord
