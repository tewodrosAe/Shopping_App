import Admin from '../models/adminModels.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const createToken  = (email) => {
    return jwt.sign({email}, process.env.SECRET, {expiresIn:'3d'})
}
const getAdmin = async(req,res) => {
    const {token} = req.body
    const {email} = jwt.verify(token, process.env.SECRET)
    try{
        const user = await Admin.findOne({email})
        res.status(200).json(user)
    }catch(e){
        res.status(400).json({error:e})
    }
}
const findAdmin = async(req,res) => {
    const {email} = req.body
    try{
        const user = await Admin.findOne({email})
        const token = createToken(email)
        res.status(200).json({token})
    }catch(e){
        res.status(400).json({error: e})
    }
}

const createAdmin = async(req,res) => {
    const {email, username, image} = req.body
    try{
        const exists = await Admin.findOne({email})
        if(exists){
            throw Error('user Exists')
        }
        const {email, createdAt} = await Admin.create({email,username,image})
        res.status(200).json({email, createdAt})
    }catch(e){
        res.status(400).json({error: e})
    }
}

export {createAdmin, getAdmin, findAdmin}