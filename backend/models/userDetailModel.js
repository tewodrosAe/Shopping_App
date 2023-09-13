import mongoose from 'mongoose'

const Schema = mongoose.Schema

const purchase = new Schema({
    purchaseId: Number,
    purchaseDate: String
})
const userDetailModel = new Schema({
    username:{
        type: String,
        required: true,
    },
    profile:{
        type: String,
        default:'https://t4.ftcdn.net/jpg/00/97/00/09/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg'
    },
    purchases:[purchase],
    user_id:{
        type: String,
        required: true,
    }
},{ timestamps: true })


export default mongoose.model('userdetail',userDetailModel)