import Router from 'koa-router'
import publicController from '../../api/svgCaptchaController'
import contentController from '../../api/ContentController1'
import userController from '../../api/UserController'

const router = new Router()

router.prefix('/public')

// 获取验证码图片
router.get('/getCaptcha', publicController.getCaptcha)

// 获取列表
router.get('/list', contentController.getPostList)

// 获取友情链接
router.get('/links', contentController.getLinks)

// 获取温馨提醒
router.get('/tips', contentController.getTips)

// 获取7天热议
router.get('/topWeek', contentController.getTopWeek)

// 更新用户名
router.get('/reset-email', userController.updateUserName)

export default router
