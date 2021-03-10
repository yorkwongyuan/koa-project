import Router from 'koa-router'
import LoginController from '../api/LoginController'

const router = new Router()
router.post('/loginController', LoginController.forget)

export default router