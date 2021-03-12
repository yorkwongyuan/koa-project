import Router from 'koa-router'
import LoginController from '../api/LoginController'

const router = new Router()

router.prefix('/login')
router.post('/loginController', LoginController.forget)
router.get('/login', LoginController.login)
export default router