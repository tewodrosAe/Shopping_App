import express from 'express'
import {getOrder} from '../controllers/orderController.js'

const route = express.Router()

route.post('/', getOrder)

export default route