import mongoose from 'mongoose'
import User from '.userModels.js'

const productSchema = mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        Ref : 'User'
    },
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique: true
    },
    password:{
        type : String,
        required : true
    },
    isAdmin:{
        type : Boolean,
        required : true,
        default: false
    }
},{
    timestamps: true
})

const Product = mongoose.model('Product',productSchema)

export default Product