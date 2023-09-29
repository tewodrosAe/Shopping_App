import mongoose from 'mongoose'
import category from './categoryModels.js'
import property from './propertyModels.js'

const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: String,
    stars: Number,
    review: String,
  },
  { timestamps: true },
)

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: category,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  property: {
    type: property,
    required: true,
  },
  picture: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [reviewSchema],
})

export default mongoose.model('products', productSchema)
