import UserDetail from '../models/userDetailModel.js'
import jwt from 'jsonwebtoken'

const requireAuth = async (req,res,next) =>{
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).json({'error':'Access Denied'})
    }

    const token = authorization.split(' ')[1]
    try{
        const {id: user_id} = jwt.verify(token,process.env.SECRET)
        req.user = await UserDetail.findOne({user_id}).populate('purchases favorites')
        next()
    }catch(e){
        console.log(e)
        res.status(401).json({'error':'authorization denied'})
    }
}

export default requireAuth