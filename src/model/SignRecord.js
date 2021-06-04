import mongoose from '../config/DBHelper'
import moment from 'dayjs'
const Schema = mongoose.Schema
// 定义了一个数据骨架
const SignRecordSchema = new Schema({
  uid: { type: String, ref: 'users' },
  created: { type: String },
  favs: { type: Number }
})
// 钩子
SignRecordSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

// schema的静态方法
SignRecordSchema.statics = {
  findByUid: function (uid) {
    return this.findOne({ uid }).sort({ created: -1 })
  }
}

// model为连接collection的方法
const SignRecord = mongoose.model('sign_record', SignRecordSchema)

export default SignRecord
