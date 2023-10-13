import Cart from "../models/cartModel.js"

const getCart = async(req,res) => {
    const {_id: userId} = req.user 
    try{
        const cart = await Cart.find({userId})
        res.status(200).json(cart)
    }catch(e){
        res.status(400).json({error:e})
    }
}

const createCart = async(req,res) =>  {
    const {productDetail, userId} = req.body
    const exists = await Cart.find({userId})
    if(exists.length <= 0){
        try{
            const cart = await Cart.create({userId, products:[productDetail]})
            res.status(200).json(cart)
        }catch(e){
            res.status(400).json({error: e})
        }
    }
    else{
        try{
            const itemExists = await Cart.where('userId').equals(userId).find({'products.productId':productDetail.productId})
            if(itemExists.length > 0){
                return res.status(400).json({error: 'Already exists'})
            }
            const cart = await Cart.findOneAndUpdate({userId},
                {'$push':{products:productDetail}},
                {'new':true, 'upsert': true }
            )
            res.status(200).json(cart)
        }catch(e){
            res.status(400).json({error: e})
        }
    }
}

const removeCart = async(req,res) =>  {
    const {productId, userId} = req.body
    try{
        const deleted = await Cart.deleteOne({'userId':userId, 'products.productId': productId})
        res.status(200).json({deleted})
    }catch(e){
        res.status(400).json({error:e})
    }
}

const eraseCart = async(req,res) =>  {
    const { userId } = req.body
    try{
        const deleted = await Cart.deleteOne({userId})
        res.status(200).json({deleted})
    }catch(e){
        res.status(400).json({error:e})
    }
}
export {createCart, getCart, removeCart, eraseCart}