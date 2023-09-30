import mongoose from "mongoose"
import Category from "../models/categoryModels.js"


const createCategory = async(req,res) => {
    const { categories } = req.body
    const exist = await Category.exists({category: categories.category})
    if(exist){
        return res.status(400).json({error:'Category already exists'})
    }
    try{
        const resp = await Category.create(categories)
        res.status(200).json(resp)
    }catch(e){
        res.status(400).json({error: e})
    }
}

const getCategory = async(req,res) => {
    try{
        const categories = await Category.find()
        res.status(200).json(categories)
    }catch(e){
        res.status(400).json({error:e})
    }
}
const removeCategory = async(req,res) => {
    const {id} = req.body
    try{
        const deleted = await Category.deleteOne({_id:id})
        res.status(200).json(deleted)
    }catch(e){
        res.status(400).json({error:e})
    }
}
const editCategory = async(req,res) => {
    const { datas } = req.body
    if(!mongoose.Types.ObjectId.isValid(datas.id)){
        return res.status(400).json({error: 'Something doesnt seem right'})
    }
    try{
        const edited = await Category.findByIdAndUpdate(datas.id, datas.categories,{new:true})
        res.status(200).json(edited)
    }catch(e){
        res.status(400).json({error:e})
    }
}

export {createCategory, getCategory, editCategory, removeCategory}