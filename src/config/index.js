import path from 'path'
const DB_URL = 'mongodb://test:123456@106.55.51.93:27017/testdb'
const REDIS = {
  host: '106.55.51.93',
  port: '15001',
  password: 123456
}

const JWT_SECRET = '12312123123'
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://106.55.51.93:10066' : 'http://localhost:8080'
const uploadPath = process.env.NODE_ENV === 'production' ? '/app/public' : path.join(path.resolve(__dirname), '../public')

export default {
  DB_URL,
  REDIS,
  JWT_SECRET,
  baseUrl,
  uploadPath
}
