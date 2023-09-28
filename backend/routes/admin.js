import express from 'express'
import { getAdmins, createAdmin, findAdmin,deleteAdmin, getAdmin } from '../controllers/adminController.js'

const route = express.Router()

route.get('/',getAdmins)

route.delete('/:id',deleteAdmin)

route.post('/create',createAdmin)

route.post('/search',getAdmin)

route.post('/find',findAdmin)

export default route
