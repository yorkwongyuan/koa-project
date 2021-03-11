import { setValue, getValue, getHValue, delValue } from './RedisConfig'

setValue('kkkkk', '广东省江门市江海区')
setValue('student', {name: '黄奶精', job: '运营', age: '32'})
getValue('address').then(res => {
  console.log(res, 'result')
})

getHValue('student').then(res => {
  console.log(res, 'res')
})

delValue('kkkkk')