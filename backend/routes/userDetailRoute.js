import express from "express"
import { createUserDetails, getUserDetails } from "../controllers/userDetailController.js"
import requireAuth from "../middleware/requireAuth.js"


const route = express.Router()

route.post('/create',createUserDetails)

route.use(requireAuth)

route.get('/',getUserDetails)

export default route