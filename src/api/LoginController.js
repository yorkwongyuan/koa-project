import send from '../config/mailConfig'
import monment from 'moment'
class LoginController {
  constructor() {}
  async forget (ctx) {
    const { body } = ctx.request
    console.log(body, 'ctx')
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
}

export default new LoginController()