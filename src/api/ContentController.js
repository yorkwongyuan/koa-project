import Post from '../model/Post'
import Link from '../model/Link'
import config from '../config'
import moment from 'dayjs'
// import { dirExists } from '@/common/Util'
import dirExists from 'make-dir'
import fs from 'fs'
import { v4 as uuid } from 'uuid'
class PostController {
  async getPostList (ctx) {
    const body = ctx.query
    const sort = body.sort ? body.sort : 'created'
    const page = body.page ? parseInt(body.page) : 0
    const limit = body.limit ? parseInt(body.limit) : 20
    const options = {}
    console.log('PostController -> getPostList -> body.catalog', body.catalog)
    if (typeof body.catalog !== 'undefined' && body.catalog !== '') {
      options.catalog = body.catalog
    }
    if (typeof body.isTop !== 'undefined' && body.isTop !== '') {
      options.isTop = body.isTop
    }
    if (typeof body.status !== 'undefined' && body.status !== '') {
      options.status = body.status
    }
    if (typeof body.isEnd !== 'undefined') {
      options.isEnd = body.isEnd
    }
    if (typeof body.tag !== 'undefined' && body.tag !== '') {
      options.tags = { $elemMatch: { name: body.tag } }
    }
    console.log('PostController -> getPostList -> options', options)
    const result = await Post.getList(options, sort, page, limit)
    console.log('PostController -> getPostList -> result', result)
    ctx.body = {
      code: 200,
      data: result,
      msg: '获取文章列表成功'
    }
  }

  // 查询友情链接
  async getLinks (ctx) {
    // const links = new Link({
    //   title: '出大1事了',
    //   link: 'www',
    //   created: '',
    //   isTop: '0',
    //   sort: '123123',
    //   type: 'links'
    // })
    // await links.save()
    const result = await Link.find({ type: 'links' })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 查询温馨提醒
  async getTips (ctx) {
    const result = await Link.find({ type: 'tips' })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 本周热议
  async getTopWeek (ctx) {
    const result = await Post.getTopWeek()
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 上传图片接口
  async uploadImg (ctx) {
    const file = ctx.request.files.file
    const ext = file && file.name && file.name.split('.').pop()
    console.log('PostController -> uploadImg -> ext', ext)
    const dir = `${config.uploadPath}/${moment().format('YYYY-MM-DD')}`
    console.log('PostController -> uploadImg -> config.uploadPath', config.uploadPath)
    console.log('PostController -> uploadImg -> dir', dir)
    await dirExists(dir)
    const pathname = uuid()
    const destPath = `${dir}/${pathname}.${ext}`
    const visitPath = `/${moment().format('YYYY-MM-DD')}/${pathname}.${ext}`
    // 创建文件流
    // highWaterMark可以规定文件一次读多少字节,默认 64*1024
    const reader = fs.createReadStream(file.path, { highWaterMark: 1024 * 1 })
    // fs.createWriteStream只负责创造文件,但是不负责生成里面的内容!
    // 也就是说如果只写了fs.createWriteStream,只会产生一个空的xx.png图片
    const upStream = fs.createWriteStream(destPath)
    console.log('PostController -> uploadImg -> upStream', upStream)
    // 方法1
    // reader.pipe(upStream)
    // 方法2
    // 获取文件的大小,fs是一次性获取
    const stat = fs.statSync(file.path)
    console.log('PostController -> uploadImg -> stat', stat.size)
    let totalLength = 0
    // 通过data事件是分开获取
    reader.on('data', (chunk) => {
      totalLength += chunk.length
      console.log('PostController -> uploadImg -> totalLength', totalLength)
      // 这里的upStream.write方法实际上是在往文件里写入内容
      if (upStream.write(chunk) === false) {
        reader.pause()
      }
    })

    reader.on('drain', () => {
      reader.resume()
    })

    reader.on('end', () => {
      // upStream.end()
    })
    ctx.body = {
      code: 200,
      msg: '图片上传成功',
      data: visitPath
    }
  }
}
export default new PostController()
