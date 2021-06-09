import { getValue } from '../config/RedisConfig'
import config from '../config/index'
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
// 校验token的正确性
const getJWTPayload = token => {
  return jwt.verify(token.split(' ')[1], config.JWT_SECRET)
}
// 判断验证码
const checkCode = async (key, value) => {
  console.log('checkCode -> key', key)
  const redisData = await getValue(key)
  console.log(redisData && redisData.toLowerCase() === value.toLowerCase(), 'bool')
  // redis 中有这个数据
  if (redisData) {
    // 值相同
    if (redisData && redisData.toLowerCase() === value.toLowerCase()) {
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

// 获取路径的文件信息
const getStats = (path) => {
  return new Promise(resolve => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false)
      } else {
        resolve(stats)
      }
    })
  })
}
// 创建文件夹
const mkdir = (dir) => {
  return new Promise(resolve => {
    fs.mkdir(dir, err => err ? resolve(false) : resolve(true))
  })
}
// 循环遍历，如果上级不存在则创造上级目录
// 如果已经存在一个文件了则无法创建
const dirExists = async (dir) => {
  const isExists = await getStats(dir)
  // 路径存在而且是文件夹
  if (isExists && isExists.isDirectory()) {
    return true
  // 路径存在而且是文件
  } else if (isExists) {
    return false
  }
  // 路径不存在文件夹需要创建
  const tempDir = path.parse(dir).dir
  const status = dirExists(tempDir)
  if (status) {
    const result = mkdir(dir)
    return result
  } else {
    return false
  }
}

export {
  checkCode,
  getJWTPayload,
  dirExists
}
