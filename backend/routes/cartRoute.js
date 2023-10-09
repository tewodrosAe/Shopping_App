import express from 'express'
import { createCart, getCart } from '../controllers/cartControllers.js'
import requireAuth from '../middleware/requireAuth.js'

const route = express.Router()

route.post('/create', createCart)
route.use(requireAuth)
route.get('/', getCart)

export default route