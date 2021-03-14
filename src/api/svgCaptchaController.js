import svgCaptcha from 'svg-captcha'
import { setValue } from '../config/RedisConfig'
class PublicController {
  constructor() {

  }
  getCaptcha (ctx) {
    const query = ctx.request.query
    const newCaptcha = svgCaptcha.create({
      size: 6, // 验证码位数
      ignoreChars: 'io0l', // 不显示的几个字母或者数字
      color: true, // 字体有眼色
      noise: Math.floor(Math.random() * 5), // 干扰线条数
      width: 150, // 宽度
      height: 50  // 高度
    })
    console.log(query, 'query')
    setValue(query.sid, newCaptcha.text )
    console.log(newCaptcha.text)
    ctx.body = {
      "code": 200,
      "message": newCaptcha.data
    }
  }
}

export default new PublicController()