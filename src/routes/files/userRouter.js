import Router from 'koa-router'
import userController from '../../api/UserController'

const router = new Router()
router.prefix('/user')
router.get('/fav', userController.userSign)
router.post('/basic', userController.updateUserInfo)

export default router
