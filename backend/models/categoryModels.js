import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  parentCategory: String,
})

export default mongoose.model('category', categorySchema)
