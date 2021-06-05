import send from '../config/mailConfig'
import moment from 'dayjs'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '../common/Util'
import User from '../model/User'
import SignRecord from '../model/SignRecord'
import bcrypt from 'bcrypt'
class LoginController {
  // constructor () {}
  async forget (ctx) {
    const { body } = ctx.request
    try {
      const result = await send({
        code: '1234',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        // email: '282311878@qq.com',
        email: body.username,
        user: 'wangy'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }
    } catch (e) {
      console.log(e)
    }
  }

  async login (ctx) {
    const { body } = ctx.request
    const sid = body.sid
    const code = body.code
    const userInfo = await User.findOne({ username: body.username })
    console.log('LoginController -> login -> userInfo.json', userInfo.toJSON())
    console.log('LoginController -> login -> userInfo', userInfo)
    const json = userInfo.toJSON()
    const arr = ['username', 'password', 'roles']
    arr.forEach(item => {
      delete json[item]
    })
    const password = userInfo.password
    const isCodeAvailable = await checkCode(sid, code)
    console.log(isCodeAvailable, 'isCodeAvailable')
    // 验证码是否正确
    if (isCodeAvailable) {
      const bool = bcrypt.compare(body.password, password)
      // 用户名密码正确
      if (bool) {
        const token = jsonwebtoken.sign({ _id: json._id }, config.JWT_SECRET, {
          expiresIn: '1h'
        })
        const record = await SignRecord.findByUid(json._id)
        console.log('LoginController -> login -> record', record)
        // 如果没有签到信息
        if (record !== null) {
          // 如果签到的时间是今天
          if (moment(record.created).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
            json.isSign = true
          } else {
            json.isSign = false
          }
          // 上一次签到的时间
          json.lastSign = record.created
          // 如果有签到信息
        } else {
          json.isSign = false
        }
        ctx.body = {
          code: 200,
          token: token,
          data: json,
          msg: '登录成功'
        }
      } else {
        ctx.body = {
          code: 404,
          msg: '账号密码不正确'
        }
      }
    } else {
      ctx.body = {
        msg: '图片验证码不正确,请检查',
        code: 401
      }
    }
  }

  async register (ctx) {
    console.log(ctx, '数据呢')
    // 接收数据
    const { body } = ctx.request
    console.log('register -> body', body)
    const sid = body.sid
    const code = body.code
    const msg = {}
    const isCodeAvailable = await checkCode(sid, code)
    console.log('register -> isCodeAvailable', isCodeAvailable)
    let isChecked = true
    // 校验验证码
    if (isCodeAvailable) {
      // 校验用户名是否重复
      const user1 = await User.findOne({ username: body.username })
      if (user1 && typeof user1.username !== 'undefined') {
        msg.username = ['邮箱已经被注册']
        isChecked = false
      }
      // 校验昵称是否重复
      const user2 = await User.findOne({ username: body.nickname })
      if (user2 && typeof user2.nickname !== 'undefined') {
        msg.nickname = ['昵称已经被注册了']
        isChecked = false
      }
      // 写入数据库
      if (isChecked) {
        body.password = await bcrypt.hash(body.password, 5)
        const user = new User({
          username: body.username,
          password: body.password,
          name: body.nickname,
          created: moment().format('YY-MM-DD HH:mm:ss')
        })
        const result = await user.save()
        ctx.body = {
          code: 200,
          data: result,
          msg: '注册成功'
        }
        return
      }
    } else {
      msg.username = ['验证码失效，请重新获取']
    }
    ctx.body = {
      code: 500,
      msg: msg
    }
  }
}

export default new LoginController()
