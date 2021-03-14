import send from '../config/mailConfig'
import monment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '../common/Util'
import User from '../model/User'
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
    console.log(body, 'body')
    const userInfo = await User.findOne({username: body.username})
    console.log('userInfo', userInfo)
    let password = userInfo.password
    // 验证码是否正确
    if (checkCode(sid, code)) {
      let bool = password === body.password
      console.log(bool, 'bool')
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
}

export default new LoginController()