import send from '../config/mailConfig'
import monment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '../common/Util'
import User from '../model/User'
import bcrypt from 'bcrypt'
class LoginController {
  constructor() {}
  async forget (ctx) {
    const { body } = ctx.request
    try {
      const result = await send({
        code: '1234',
        expire: monment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
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
    const userInfo = await User.findOne({username: body.username})
    let password = userInfo.password
    console.log(userInfo, 'userInfo')
    const isCodeAvailable = await checkCode(sid, code)
    console.log(isCodeAvailable, 'isCodeAvailable')
    // 验证码是否正确
    if (isCodeAvailable) {
      let bool = bcrypt.compare(body.password, password)
      // 用户名密码正确
      if (bool) {
        const token = jsonwebtoken.sign({_id: '1111ork'}, config.JWT_SECRET, {
          expiresIn: '1h'
        })
        ctx.body = {
          code: 200,
          data: token,
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
    console.log(ctx, 'bod11y')
    // 接收数据
    const { body } = ctx.request
    const sid = body.sid
    const code = body.code
    let msg = {}
    const isCodeAvailable = await checkCode(sid, code)
    let isChecked = true
    // 校验验证码
    if(isCodeAvailable) {
      // 校验用户名是否重复
      const user1 = await User.findOne({username: body.username})
      if (user1 && typeof user1.username !== 'undefined') {
        msg.username = ['邮箱已经被注册']
        isChecked = false
      }
      // 校验昵称是否重复
      const user2 = await User.findOne({username: body.nickname})
      if (user2 && typeof user2.nickname !== 'undefined') {
        msg.nickname = ['昵称已经被注册了']
        isChecked = false
      }
      // 写入数据库
      if (isChecked) {
        body.password = await bcrypt.hash(body.password, 5)
        let user = new User({
          username: body.username,
          password: body.password,
          nickname: body.nickname,
          created: monment().format('YY-MM-DD HH:mm:ss')
        })
        let result = await user.save()
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