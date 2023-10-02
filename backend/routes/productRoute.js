import express from 'express'
import { createProduct, deleteProducts, getProducts } from '../controllers/productControllers.js'

const route = express.Router()

route.get('/', getProducts)
route.post('/create', createProduct)
route.post('/delete', deleteProducts)

export default route