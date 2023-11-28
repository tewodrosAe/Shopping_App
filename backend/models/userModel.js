import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import validator from "validator"; 

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

userSchema.statics.signup = async function({email, username, password, confirmpassword}) {
    if(!email || !username || !password || !confirmpassword){
        throw Error('All fields must be filled')
    }

    if(confirmpassword !== password){
        throw Error('Passwords must match')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is Invalid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong')
    }
    const userExists = await this.findOne({email})
    if(userExists){
        throw Error('User already exists')
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password,salt)
    const user = await this.create({email, username, password:hash})

    return user
}

userSchema.statics.login = async function({email,password}) {
    if(!email || !password ){
        throw Error('All fields must be field')
    }
    const user = await this.findOne({email})

    if(!user){
        throw Error('Sorry but user doesn\'t exist')
    }

    const check =  bcrypt.compareSync(password, user.password)

    if(!check){
        throw Error('Incorrect Email or Password')
    }

    return user
}

export default mongoose.model('User',userSchema)