import mongoose from '../config/DBHelper'
const Schema = mongoose.Schema

// 定义了一个数据骨架
const UserSchema = new Schema({
  username: { type: String },
  nickname: { type: String },
  password: { type: String }
})

// model为连接collection的方法
const User = mongoose.model('users', UserSchema)

export default User
