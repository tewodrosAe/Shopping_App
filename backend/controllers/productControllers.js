import mongoose from 'mongoose'
import cloudinary from '../cloudinary/index.js'
import Product from '../models/productModels.js'
import {imageCreator} from '../utils/index.js'

const createProduct = async (req, res) => {
  const { name, category, price, images, property, description } = req.body
  const picture = await imageCreator(images)
  try{
    const product = await Product.create({name, category, price, property, picture, description})
    res.status(200).json(product)
  }catch(e){
    res.status(400).json({error:e})
  }
}

const getProducts = async (req, res) => {
  try {
    const product = await Product.find().select('name category price picture')
    res.status(200).json(product)
  } catch (e) {
    res.status(400).json({ error: e })
  }
}

const getProduct = async (req, res) => {
  const { productId } = req.params  
  if(!mongoose.Types.ObjectId.isValid(productId)){
    return res.status(400).json({error: 'Product doesnt exist!'})
  }
  try {
    const product = await Product.findById(productId)
    res.status(200).json(product)
  } catch (e) {
    res.status(400).json({ error: 'Product doesnt exist!' })
  }
}

const editProduct = async (req, res) => {
  const { productId } = req.params  
  if(!mongoose.Types.ObjectId.isValid(productId)){
      return res.status(400).json({error: 'Something doesnt seem right'})
  }
  const {name, category, price, property, description, originalImages, images} = req.body
  let picture = []
  if(images.length > 0){
    picture = await imageCreator(images)
  }
  picture = [...picture, ...originalImages]
  if(picture.length <= 0){
    return res.status(400).json({error: 'Something doesnt seem right'})
  }
  try{
      const edited = await Product.findByIdAndUpdate(productId, {name, category, price, property, picture, description},{new:true})
      res.status(200).json(edited)
  }catch(e){
      res.status(400).json({error:e})
  }
}


const deleteProducts = async (req, res) => {
  const {id} = req.body
    try{
        const deleted = await Product.deleteOne({_id:id})
        res.status(200).json(deleted)
    }catch(e){
        res.status(400).json({error:e})
    }
}

export { createProduct, getProducts, deleteProducts, getProduct, editProduct}
