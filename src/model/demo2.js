import mongoose from 'mongoose'
// 连接
mongoose.connect('mongodb://myTester:123456@119.91.228.12:27017/testdb')

// 定义SchemaType
const SchemaType = mongoose.Schema({
  name: String,
  age: Number
})

// 获取Documents
const Users = mongoose.model('user', SchemaType)

// 新增数据
const addData = async () => {
  const info = {
    name: '小明',
    age: 12
  }
  const documents = new Users(info)
  await documents.save()
}

addData()

// 查询数据
const findData = async () => {
  const result = await Users.find()
  console.log('🚀 ~ file: demo2.js ~ line 21 ~ addData ~ result', result)
}

findData()
