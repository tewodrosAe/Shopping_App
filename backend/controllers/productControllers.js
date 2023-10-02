import cloudinary from '../cloudinary/index.js'
import Product from '../models/productModels.js'

const createProduct = async (req, res) => {
  const { name, category, price, images, property, description } = req.body
  const picture = []
  for (const image of images) {
    try {
      const result = await cloudinary.uploader.upload(image, {
        upload_preset: 'Tech_shop',
        public_id: `product${Math.random() * 1000}`,
        allowed_formats: ['jpeg', 'png', 'jpg', 'webp'],
      })
      picture.push(result.secure_url)
    } catch (e) {
      console.log(e)
    }
  }
  try{
    const product = await Product.create({name, category, price, property, picture, description})
    res.status(200).json(product)
  }catch(e){
    res.status(400).json({error:e})
  }
}

const getProducts = async (req, res) => {
  try {
    const product = await Product.find().select('name category price')
    res.status(200).json(product)
  } catch (e) {
    res.status(400).json({ error: e })
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

export { createProduct, getProducts, deleteProducts}
