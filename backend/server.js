import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoute.js'
import productRoutes from './routes/productRoute.js'
import categoryRoutes from './routes/categoryRoute.js'
import userDetailRoutes from './routes/userDetailRoute.js'
import adminRoutes from './routes/adminRoute.js'
import cartRoutes from './routes/cartRoute.js'
import orderRoutes from './routes/orderRoute.js'
import stripe from './routes/stripe.js'

// app configuration
const app = express()
dotenv.config()

// middleware
app.use(express.json({limit: '50mb'}));
app.use(
  express.urlencoded({
    extended: true,
    limit: '50mb',
  }),
);
app.use(cors({
  origin: ['']
}))

// routes
app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/userdetail',userDetailRoutes)
app.use('/api/v1/admin',adminRoutes)
app.use('/api/v1/product',productRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/stripe',stripe)
app.use('/api/v1/cart',cartRoutes)
app.use('/api/v1/orders',orderRoutes)

// enviroment constant calling
const PORT = process.env.PORT || 5000
// Database Connection and port listening
mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT)
    })
})
.catch((err) => console.log({error:err.message}))