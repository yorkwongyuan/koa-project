import send from '../config/mailConfig'
import monment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
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
  login (ctx) {
    // 放在payload中
    // const token = jsonwebtoken.sign({_id: 'york', exp: Math.floor(Date.now()/1000) + 24*60*60}, config.JWT_SECRET)
    // 放在options中
    const token = jsonwebtoken.sign({_id: 'york'}, config.JWT_SECRET, {
      expiresIn: '1h'
    })
    ctx.body = {
      code: 200,
      data: token,
      msg: '邮件发送成功'
    }
  }
}

export default new LoginController()