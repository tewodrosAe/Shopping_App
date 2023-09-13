import express from 'express'
import { userLogin, userSignup } from '../controllers/userController.js'

const router = express.Router()

// login user
router.post('/login',userLogin)

// signup user
router.post('/signup',userSignup)

export default router