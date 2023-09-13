import User from '../models/userModel.js' 
import jwt from 'jsonwebtoken'


const createUserToken = (id) => {
    return jwt.sign({id},process.env.SECRET,{ expiresIn: '2d'})
}

const userLogin = async(req,res) =>{
    const {email,password} = req.body
    try{
        const user = await User.login({email,password})
        const token = createUserToken(user._id)
        res.status(200).json({token})
    }catch(e){
        res.status(400).send({error:e.message})
    }
}

const userSignup = async(req,res) =>{
    const {email, username, password, confirmpassword} = req.body
    try{
        const user = await User.signup({email, username, password, confirmpassword})
        const token = createUserToken(user._id)
        res.status(200).json({user,token})
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

export {userLogin, userSignup}