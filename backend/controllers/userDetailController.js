import UserDetail from '../models/userDetailModel.js'
import Product from '../models/productModels.js'

const getUserDetails = async(req,res) =>{
    const user = req.user
    if(user){
        res.status(200).json(user)
    }
    else{
        res.status(400).json({error:'somethin went wrong'})
    }
}

const createUserDetails = async(req,res) =>{
    const {user_id, username, email} = req.body
    try{
        const userDetails = await UserDetail.create({user_id,username, email})
        res.status(200).json(userDetails)
    }catch(e){
        console.log(e)
        res.status(400).json({error:e})
    }
}

const addFavorite = async(req,res) =>{
    const {userId, favorite} = req.body
    const exists = await UserDetail.exists({_id: userId, favorites: favorite})
    if(exists){
        return res.status(400).json({error: 'Product Already saved!'})
    }
    try{
        const userDetails = await UserDetail.findByIdAndUpdate(userId, 
                {'$push': {favorites: favorite, favoritesAdded:{[favorite]: favorite}}},
                {'new': true, 'upsert': true}
            )
        res.status(200).json(userDetails)
    }catch(e){
        res.status(400).json({error:e})
    }
}

const removeFavorite = async(req,res) =>{
    const {userId, favorites} = req.body
    const favoritesId = favorites.map(fav => Object.keys(fav)[0])
    try{
        const userDetails = await UserDetail.findByIdAndUpdate(userId,
            {favoritesAdded: favoritesId.map(fav => ({[fav]: fav})), favorites:favoritesId}
            )
        res.status(200).json(userDetails)
    }catch(e){
        res.status(400).json({error:e})
    }
}
export {getUserDetails, createUserDetails, addFavorite, removeFavorite}