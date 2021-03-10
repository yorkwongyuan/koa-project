import mongoose from '../config/DBHelper'
const Schema = mongoose.Schema

const TestSchema = new Schema({
  name: {type: String},
  age: {type: Number},
  email: {type: String}
})

// model为连接collection的方法
const testUsers = mongoose.model('users', TestSchema)

export default testUsers