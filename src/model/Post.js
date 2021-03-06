import mongoose from '../config/DBHelper'
import moment from 'dayjs'
const Schema = mongoose.Schema

const postSchema = new Schema({
  uid: { type: String, ref: 'users' }, /// String 否用户ID
  title: { type: String }, // String 否文章标题
  content: { type: String }, // String 否文章内容
  created: { type: Date }, // Date 否 now() 创建帖子的时间
  catalog: { type: String }, // String 否  帖子的分类，index-全部，ask-提问，advise-建议，discuss-交流，share-分享，logs-动态 ，notice-公告
  fav: { type: String }, // String 否  帖子积分
  isEnd: { type: String }, // String 否 0 0-未结束，1-已结束
  reads: { type: Number }, // Number 否 0 阅读记数
  answer: { type: Number }, // Number 否 0 回答记数
  status: { type: String }, // String 否 0 0-打开回复，1-关闭回复
  isTop: { type: String }, // String 否 0 0-未置顶，1-已置顶
  sort: { type: String }, // String 否 0 置顶排序
  tags: { type: Array }
})

// middleware使用
// 保存的时候执行这个方法
postSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

postSchema.statics = {
  /**
   * 获取文章数据列表
   * @param {Object} options 筛选条件
   * @param {String} sort 排序方式
   * @param {Number} page 分页页数
   * @param {Number} limit 分页条数(单页的数量)
   */
  getList (options, sort, page, limit) {
    return this.find(options)
      .sort({ [sort]: -1 })
      .skip(page * limit)
      .limit(limit)
      .populate({
        path: 'uid',
        select: 'name isVip pic'
      })
  },
  // 获取最近七天的数据
  getTopWeek () {
    return this.find({
      created: {
        $gte: moment().subtract(7, 'days') // $gte的意思是大于7天前的日期，也就是最近七天
      }
    }, {
      title: 1, // 显示title和answer这两个字段
      answer: 1
    }).sort({ answer: -1 }).limit(15)
  }
}
const PostModel = mongoose.model('post', postSchema)
export default PostModel
