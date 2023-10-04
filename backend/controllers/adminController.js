import Admin from '../models/adminModels.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const createToken  = (email) => {
    return jwt.sign({email}, process.env.ADMIN_SECRET, {expiresIn:'3d'})
}
const getAdmins = async(req,res) => {
    try{
        const user = await Admin.find().sort({createdAt:-1})
        res.status(200).json(user)
    }catch(e){
        res.status(400).json({error:e})
    }
}

const getAdmin = async(req,res) => {
    const {token} = req.body
    const {email} = jwt.verify(token, process.env.ADMIN_SECRET)
    try{
        const user = await Admin.findOne({email})
        if(!user){
            return res.status(400).json({error: 'Access Denied'})
        }
        res.status(200).json(user)
    }catch(e){
        res.status(400).json({error:e})
    }
}

const findAdmin = async(req,res) => {
    const {email} = req.body
    try{
        const user = await Admin.findOne({email})
        if(user){
            const token = createToken(email)
            res.status(200).json({token})
        }else{
            res.status(200).json({error: 'Access Denied'})
        }
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
        const resp = await Admin.create({email,username,image})
        res.status(200).json({email: resp.email, createdAt: resp.createdAt, _id: resp._id})
    }catch(e){
        res.status(400).json({error: e})
    }
}

const deleteAdmin = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID error'})
    }
    const admin = await Admin.findOneAndDelete({_id:id})
    if(!admin){
        return res.status(404).json({error: "Delete not found"})
    }
    res.status(200).json(admin)
}

export {createAdmin, getAdmins, findAdmin, deleteAdmin, getAdmin}