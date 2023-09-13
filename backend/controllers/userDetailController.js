import UserDetail from '../models/userDetailModel.js'

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
    const {user_id, username} = req.body
    try{
        const userDetails = await UserDetail.create({user_id,username})
        res.status(200).json(userDetails)
    }catch(e){
        res.status(400).json({error:e})
    }
}
export {getUserDetails, createUserDetails}