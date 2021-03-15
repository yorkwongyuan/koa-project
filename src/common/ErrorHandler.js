export default (ctx, next) => {
  console.log('1')
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
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