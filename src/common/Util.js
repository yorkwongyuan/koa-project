import { getValue } from '../config/RedisConfig'
import config from '../config/index'
import jwt from 'jsonwebtoken'

// 校验token的正确性
const getJWTPayload = token => {
  return jwt.verify(token.split(' ')[1], config.JWT_SECRET)
}
// 判断验证码
const checkCode = async (key, value) => {
  console.log('checkCode -> key', key)
  const redisData = await getValue(key)
  console.log(redisData.toLowerCase() === value.toLowerCase(), 'bool')
  // redis 中有这个数据
  if (redisData !== null) {
    // 值相同
    if (redisData.toLowerCase() === value.toLowerCase()) {
      return true
      // 值不同
    } else {
      return false
    }
    // redis中没有
  } else {
    return false
  }
}

export {
  checkCode,
  getJWTPayload
}
