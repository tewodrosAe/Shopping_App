import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: String,
    stars: Number,
    review: String,
  },
  { timestamps: true },
)
const propertySchema = new Schema({
  storage:[Number],
  color:[String]
})

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  property: {
    type: propertySchema,
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
