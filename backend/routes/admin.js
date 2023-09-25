import express from 'express'

const route = express.Router()

route.post('/',getAdmin)

route.post('/create',createAdmin)

route.post('/find',findAdmin)

