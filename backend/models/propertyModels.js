import mongoose from "mongoose";

const Schema = mongoose.Schema

const propertySchema = new Schema({
    storage:{
        type: [Number],
        required: true
    },
    color:{
        type: [String],
        required:true
    }
})

export default mongoose.model('properties', propertySchema)