import { getValue } from '../config/RedisConfig'

// 判断验证码
const checkCode = async (key, value) => {
  console.log(111)
  let redisData = await getValue(key)
  console.log(333, redisData)
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
  checkCode
}