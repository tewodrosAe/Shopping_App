import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoute.js'
import productRoutes from './routes/productRoute.js'
import userDetailRoutes from './routes/userDetailRoute.js'
import adminRoutes from './routes/adminRoute.js'

// app configuration
const app = express()
dotenv.config()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/userdetail',userDetailRoutes)
app.use('/api/v1/admin',adminRoutes)
app.use('/api/v1/product',productRoutes)


// enviroment constant calling
const PORT = process.env.PORT
// Database Connection and port listening
mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT)
    })
})
.catch((err) => console.log({error:err.message}))