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
    // 获取用户基本信息
    const user = await User.findByID(obj._id)
    let newRecord = {}
    let result = ''
    // 判断签到逻辑
    // 如果有签到记录
    if (record !== null) {
      // 判断用户上一次签到记录的created时间是否和今天相同, 如果相同则说明已经签到了
      if (moment(record.created).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
        // 用户已经签到了
        ctx.body = {
          code: 500,
          msg: '',
          favs: user.favs,
          count: user.count
        }
      } else {
      // 有签到记录而且不是今天签到
      // 用户签到数量
        const count = user.count
        let fav = 0
        // 如果上次签到是在昨天,也就是所谓的连续签到
        if (moment(record.last_sign).format('YYYY-MM-DD HH:mm:ss') === moment().substract(1, 'days').format('YYYY-MM-DD HH:mm:ss')) {
          // 连续签到逻辑
          if (count < 5) {
            fav = 5
          } else if (count >= 5 && count < 15) {
            fav = 10
          } else if (count >= 15 && count < 30) {
            fav = 15
          } else if (count >= 30 && count < 100) {
            fav = 20
          } else if (count >= 100 && count < 365) {
            fav = 30
          } else if (count >= 365) {
            fav = 50
          }
          // 更新User表数据
          await User.updateOne(
            { _id: obj._id },
            { $inc: { favs: fav, count: 1 } }
          )
          result = {
            count: user.count + 1,
            favs: user.favs + fav
          }
        } else {
          // 中断连续签到
          fav = 5
          await User.updateOne({ _id: obj._id }, {
            $set: {
              count: 1
            },
            $inc: {
              favs: fav
            }
          })
          result = {
            count: 1,
            favs: user.favs + fav
          }
          newRecord = new SignRecord({
            uid: obj._id,
            last_sign: record.created,
            favs: fav
          })
          newRecord.save()
        }
      }
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
