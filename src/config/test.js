import { setValue, getValue } from './RedisConfig'

setValue('kkkkk', '广东省江门市江海区')

getValue('address').then(res => {
  console.log(res, 'result')
})