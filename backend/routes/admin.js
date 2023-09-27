import express from 'express'
import { getAdmin, createAdmin, findAdmin,deleteAdmin } from '../controllers/adminController.js'

const route = express.Router()

route.get('/',getAdmin)

route.delete('/:id',deleteAdmin)

route.post('/create',createAdmin)

route.post('/find',findAdmin)

export default route
