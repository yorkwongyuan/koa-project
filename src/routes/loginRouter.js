import Router from 'koa-router'
import LoginController from '../api/LoginController'

const router = new Router()

router.prefix('/login')
router.post('/loginController', LoginController.forget)
router.post('/login', LoginController.login)
router.post('/register', LoginController.register)
console.log(LoginController.register, 'LoginController.register')
export default router
