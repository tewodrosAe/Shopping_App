import express from 'express'
import { createProduct, deleteProducts, editProduct, getProduct, getProducts, updateProductComment } from '../controllers/productControllers.js'

const route = express.Router()

route.get('/', getProducts)
route.get('/:productId', getProduct)
route.post('/edit/:productId', editProduct)
route.post('/comment', updateProductComment)
route.post('/create', createProduct)
route.post('/delete', deleteProducts)

export default route