import mongoose from 'mongoose'
import property from './propertyModels.js'

const Schema = mongoose.Schema

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  parent: String,
  properties: {
    type: property,
    required: true,
  },
})

export default mongoose.model('category', categorySchema)
