import { setValue, getValue } from './RedisConfig'

// setValue('address', '广东省江门市江海区')

getValue('address').then(res => {
  console.log(res, 'result')
})