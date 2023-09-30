import express from 'express'
import { createCategory, editCategory, getCategory, removeCategory } from '../controllers/categoryControllers.js'


const route = express.Router()

route.get('/', getCategory)
route.post('/create', createCategory)
route.post('/delete', removeCategory)
route.post('/edit', editCategory)

export default route