import redis from 'redis'
import bluebird from 'bluebird'
import config from './index'
const options = {
  ...config.REDIS,
  detect_buffers: true,
  retry_strategy: function(options) {
    if (options.error && options.error.code === "ECONNREFUSED") {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error("The server refused the connection");
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error("Retry time exhausted");
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000);
  }
}

bluebird.promisifyAll(redis)
const client = redis.createClient(options)
// 设置
const setValue = (key, value, time) => {
  const arr = [null, 'null', undefined, 'undefined']
  if (arr.includes(value)) return
  if (typeof value === 'string') {
    if (typeof time !== 'undefined') {
      client.set(key, value, 'EX', time)
    } else {
      client.set(key, value)
    }
  } else if (typeof value === 'object') {
    Object.keys(value).forEach((item) => {
      client.hset(key, item, value[item], redis.print)
    })
  }
  // 也可以使用此方法
  // client.expire(key, time)
}

// const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);

// 获取字符串
const getValue = (key) => {
  // return getAsync(key)
  return client.getAsync(key)
}

// 获取整个hash表里的数据
const getHValue = (key) => {
  // return promisify(client.hgetall).bind(client)(key)
  return client.hgetallAsync(key)
}

// 删除
const delValue = (key) => {
  client.del(key, (err, res) => {
    if (res === 1) {
      console.log('success')
    } else {
      console.log('fail', err)
    }
  })
}

export {
  client,
  setValue,
  getValue,
  getHValue,
  delValue
}