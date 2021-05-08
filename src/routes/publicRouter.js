import Router from 'koa-router'
import publicController from '../api/svgCaptchaController'
import contentController from '../api/contentController'

const router = new Router()

router.prefix('/public')
router.get('/getCaptcha', publicController.getCaptcha)
router.get('/list', contentController.getPostList)
export default router
