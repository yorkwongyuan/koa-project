import SignRecord from '../model/SignRecord'
import { getJWTPayload } from '../common/Util'
import send from '../config/mailConfig'
import User from '../model/User'
import moment from 'dayjs'
import { v4 as uuid } from 'uuid'
import config from '../config/index'
import { setValue } from '../config/RedisConfig'
import jwt from 'jsonwebtoken'
class UserController {
  async userSign (ctx) {
    // 获取JWT的payload
    // 查询用户id
    const obj = await getJWTPayload(ctx.header.authorization)
    console.log('UserController -> userSign -> obj', obj)
    // 查询上一次签到记录
    const record = await SignRecord.findByUid(obj._id)
    console.log('UserController -> userSign -> record', record)
    // 获取用户基本信息
    const user = await User.findByID(obj._id)
    let newRecord = {}
    let result = ''
    // 判断签到逻辑
    // 如果有签到记录
    if (record) {
      // 判断用户上一次签到记录的created时间是否和今天相同, 如果相同则说明已经签到了
      if (moment(record.created).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
        const now = moment(record.created).format('YYYY-MM-DD')
        console.log('UserController -> userSign -> now', now)
        // 用户已经签到了
        ctx.body = {
          code: 500,
          msg: '用户已经签到了',
          favs: user.favs,
          count: user.count,
          lastSign: record.created
        }
        return
        // 非今天签到
      } else {
      // 有签到记录而且不是今天签到
      // 用户签到数量
        let count = user.count
        let fav = 0
        // 如果上次签到是在昨天,也就是所谓的连续签到
        if (moment(record.created).format('YYYY-MM-DD') === moment().subtract(1, 'days').format('YYYY-MM-DD')) {
          count += 1 // 连续签到的话count加1
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
            count,
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
        }
        // 非今天签到的就新保存一条
        newRecord = new SignRecord({
          uid: obj._id,
          // last_sign: record.created,
          favs: fav
        })
        newRecord.save()
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
        favs: 5
        // last_sign: moment().format('YYYY-MM-DD HH:mm:ss')
      })
      await newRecord.save()
      result = {
        favs: user.favs + 5,
        count: 1
      }
    }
    ctx.body = {
      code: 200,
      msg: '请求成功',
      ...result,
      lastSign: newRecord.created
    }
  }

  // 更新用户信息
  async updateUserInfo (ctx) {
    const { body } = ctx.request
    const obj = await getJWTPayload(ctx.header.authorization)
    console.log('updateUserInfo -> obj', obj)
    const user = User.findOne({ _id: obj._id })
    // 修改了用户信息
    if (body.username && body.username !== user.username) {
      const key = uuid()
      const token = jwt.sign({ _id: obj._id }, config.JWT_SECRET, {
        expiresIn: '30m'
      })
      setValue(key, token)
      try {
        // 用户修改了用户名
        const result = await send({
          type: 'email',
          key,
          code: '',
          expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
          email: '631824375@qq.com', // user.username
          user: body.name
        })
        console.log('updateUserInfo -> result', result)
        ctx.body = {
          code: 200,
          data: result,
          msg: '邮件发送成功'
        }
      } catch (e) {
        // e
        console.log(e)
      }
    } else {
      // 这几项,本接口不得修改
      const arr = ['username', 'password', 'mobile']
      arr.forEach(item => {
        delete body[item]
      })
      // 用户没有修改用户名
      const result = await User.update({ _id: obj._id }, body)
      if (result.n === 1 && result.ok === 1) {
        ctx.body = {
          code: 200,
          msg: '更新成功'
        }
      } else {
        ctx.body = {
          code: 500,
          msg: '用户信息更新失败'
        }
      }
      console.log('updateUserInfo -> result', result)
    }
  }
}

export default new UserController()
