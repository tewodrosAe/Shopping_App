import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = Schema({
    userId:{
        type: String,
        required: true
    },
    customerId:{
        type: String,
        required: true
    },
    products: [
        { productId: { type: String }, quantity: { type: Number, default: 1 } },
      ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: "pending" },
    payment_status: { type: String, required: true },
},{timestamps: true})

export default mongoose.model('orders',orderSchema)