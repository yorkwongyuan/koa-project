import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema

const myTable = new Schema({
  name: {
    type: String,
    alias: 'n',
    get: v => Math.round(v)
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  }
})

const documents = mongoose.model('user', myTable)

export default documents
