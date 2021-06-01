import SignRecord from '../model/SignRecord'
import { getJWTPayload } from '../common/Util'
import User from '../model/User'
import moment from 'dayjs'
class UserController {
  async userSign (ctx) {
    // 获取JWT的payload
    // 查询用户id
    const obj = await getJWTPayload(ctx.header.authorization)
    console.log('UserController -> userSign -> obj', obj)
    // 查询上一次签到记录
    const record = await SignRecord.findByUid(obj._id)
    let newRecord = {}
    let result = ''
    // 判断签到逻辑
    // 如果有签到记录
    if (record !== null) {
      //
    } else {
      // 如果没有签到记录
      // 保存用户的签到数据，签到计数+积分数据
      await User.updateOne({ _id: obj._id }, {
        $set: {
          count: 1
        },
        $inc: {
          favs: 5
        }
      })
      newRecord = new SignRecord({
        uid: obj._id,
        favs: 5,
        last_sign: moment().format('YY-MM-DD HH:mm:ss')
      })
      await newRecord.save()
      result = {
        favs: 5,
        count: 1
      }
    }
    ctx.body = {
      code: 200,
      msg: '请求成功',
      ...result
    }
  }
}

export default new UserController()
