import Router from 'koa-router'
import publicController from '../api/svgCaptchaController'
import contentController from '../api/ContentController1'

const router = new Router()

router.prefix('/public')
router.get('/getCaptcha', publicController.getCaptcha)
router.get('/list', contentController.getPostList)
// 获取友情链接
router.get('/links', contentController.getLinks)

// 获取温馨提醒
router.get('/tips', contentController.getTips)

// 获取7天热议
router.get('/topWeek', contentController.getTopWeek)
export default router
