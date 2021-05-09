import mongoose from '../config/DBHelper'
import moment from 'dayjs'
const Schema = mongoose.Schema

const LinkSchema = new Schema(
  {
    title: { type: String },
    link: { type: String },
    created: { type: String },
    isTop: { type: String },
    sort: { type: String },
    type: { type: String }
  })
LinkSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})
// 链接link数据库
const LinkModel = mongoose.model('link', LinkSchema)
export default LinkModel
