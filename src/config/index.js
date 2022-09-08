import path from 'path'
const DB_URL = 'mongodb://myTester:123456@119.91.228.12:27017/testdb'
const REDIS = {
  host: '119.91.228.12',
  port: '15001',
  password: 123456
}

const JWT_SECRET = '12312123123'
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://119.91.228.12:12005' : 'http://localhost:8080'
const uploadPath = process.env.NODE_ENV === 'production' ? '/app/public' : path.join(path.resolve(__dirname), '../../public')

export default {
  DB_URL,
  REDIS,
  JWT_SECRET,
  baseUrl,
  uploadPath
}
