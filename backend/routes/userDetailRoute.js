import express from "express"
import { addFavorite, createUserDetails, getUserDetails, removeFavorite } from "../controllers/userDetailController.js"
import requireAuth from "../middleware/requireAuth.js"


const route = express.Router()

route.post('/create',createUserDetails)
route.post('/favorite',addFavorite)
route.post('/unfavorite',removeFavorite)

route.use(requireAuth)

route.get('/',getUserDetails)

export default route