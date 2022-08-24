import Users from './test2.js'

// 此处开始直接操作collections
// 增
const info = {
  name: '阿其那',
  age: 45
}

const addData = async () => {
  const result = await new Users(info)
  // result.n = '老1'
  const res = await result.save()
  console.log('🚀 ~ file: demo.js ~ line 14 ~ addData ~ res', res)
}
addData()

// // 删
// const deleteData = async () => {
//   const result = await Users.deleteOne({ age: 10000 })
//   console.log(result, '删除结果')
// }
// deleteData()

// // 改
// const updateData = async () => {
//   const result = await Users.updateOne({ age: 10000 }, { name: '人物' })
//   console.log(result)
// }
// updateData()

// // 查
// const findData = async () => {
//   const result = await Users.find()
//   console.log(result, 'result')
// }

// findData()
