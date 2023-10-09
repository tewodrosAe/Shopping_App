import mongoose from 'mongoose'

const cartSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    image:{
        type: String, 
        required: true
    },
    productId:{
        type: String, 
        required: true
    },
    userId:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    quantity:{
        type: Number, 
        required: true
    },
    category:{
        type: String, 
        required: true
    },
    price:{
        type: Number, 
        required: true
    },
},{timestamps: true})

export default mongoose.model('cart', cartSchema)