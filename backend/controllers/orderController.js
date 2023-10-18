import jwt from "jsonwebtoken"
import Admin from '../models/adminModels.js'
import Orders from "../models/orderModel.js"

const getOrder = async(req,res) => {
    const {token} = req.body
    const {email} = jwt.verify(token,process.env.ADMIN_SECRET)
    const exists = await Admin.exists({email})
    if(exists){
        const orders = await Orders.find().populate('userId products.productId')
        res.status(200).json(orders)
    }else{
        res.status(401).json({error: 'Access denied!'})
    }
}

export {getOrder}