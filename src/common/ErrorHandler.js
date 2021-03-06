export default (ctx, next) => {
  return next().catch((err) => {
    console.log('1')
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        msg: 'token无效'
      }
    } else {
      ctx.status = err.status || 500
      ctx.body = {
        code: 500,
        msg: err.message
      }
    }
  })
}
