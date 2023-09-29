import express from 'express'
import { createProduct, getProducts } from '../controllers/productControllers.js'

const route = express.Router()

route.get('/', getProducts)
route.post('/create', createProduct)

export default route