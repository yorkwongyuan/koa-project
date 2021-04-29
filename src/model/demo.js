import Users from './test.js'

// 此处开始直接操作collections
// 增
// const info = {
//   name: '阿其那',
//   age: 45,
//   email: 'bug@qq.com'
// }

// const insertMethods = async () => {
//   const test = new Users(info)
//   const result = await test.save()
//   console.log(result, 'result')
// }
// // insertMethods()

// // 删
// const deleteMethods = async () => {
//   let result = await Users.deleteOne({name: '塞思黑'})
//   console.log(result, '删除结果')
// }
// // deleteMethods()
// // 改
// const updateMethods = async () => {
//   let result = await Users.updateOne({name: '阿其那'}, {name: '塞思黑'})
//   console.log(result, '修改结果')
// }
// updateMethods()

// 查
const findMethods = async () => {
  const result = await Users.find()
  console.log(result)
}

findMethods()
