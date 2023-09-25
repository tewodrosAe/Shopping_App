import mongoose from 'mongoose'

const Schema = mongoose.Schema

const adminModel = Schema({
    username:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique: true,
        required: true
    }
},{timestamps: true})

export default mongoose.model('admins',adminModel)