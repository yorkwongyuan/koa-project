import Post from '../model/Post'
class PostController {
  async getPostList (ctx) {
    const body = ctx.query
    // const post = new Post({
    //   title: '大明王朝',
    //   content: 'test content',
    //   catalog: 'share',
    //   fav: 20,
    //   isEnd: '0',
    //   reads: '0',
    //   answer: '0',
    //   status: '0',
    //   isTop: '0',
    //   sort: '0',
    //   tags: []
    // })
    // const tmp = await post.save()
    // console.log('PostController -> getPostList -> tmp', tmp)
    const sort = body.sort ? body.sort : 'created'
    const page = body.page ? parseInt(body.page) : 0
    const limit = body.limit ? parseInt(body.limit) : 20
    const options = {}
    console.log('PostController -> getPostList -> body.catalog', body.catalog)
    if (typeof body.catalog !== 'undefined') {
      options.catalog = body.catalog
    }
    if (typeof body.isTop !== 'undefined') {
      options.isTop = body.isTop
    }
    if (typeof body.status !== 'undefined') {
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
    ctx.body = {
      code: 200,
      data: result,
      msg: '获取文章列表成功'
    }
  }
}
export default new PostController()
