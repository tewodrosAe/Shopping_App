import Product from '../models/productModels.js'

const createProduct = async (req, res) => {
  const { name, category, price, property, picture, description } = req.body
  try {
    const product = await Product.create({
      name,
      category,
      price,
      property,
      picture,
      description,
    })
    res.status(200).json(product)
  } catch (e) {
    res.status(400).json({ error: e })
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

export { createProduct, getProducts }
