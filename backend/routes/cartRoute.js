import express from 'express'
import { createCart, eraseCart, getCart, removeCart } from '../controllers/cartControllers.js'
import requireAuth from '../middleware/requireAuth.js'

const route = express.Router()

route.post('/create', createCart)
route.post('/remove', removeCart)
route.post('/erase', eraseCart)
route.use(requireAuth)
route.get('/', getCart)

export default route