import Cart from "../models/cartModel.js"

const getCart = async(req,res) => {
    const {_id: userId} = req.user 
    try{
        const cart = await Cart.find({userId}).sort({createdAt:-1})
        res.status(200).json(cart)
    }catch(e){
        res.status(400).json({error:e})
    }
}

const createCart = async(req,res) =>  {
    const {productDetail} = req.body
    const exists = await Cart.find({productId: productDetail.productId, userId: productDetail.userId})
    if(exists.length > 0){
        return res.status(400).json({error: 'Already in cart'})
    }
    try{
        const created = await Cart.create(productDetail)
        res.status(200).json(created)
    }catch(e){
        res.status(400).json({error:e})
    }
}

export {createCart, getCart}