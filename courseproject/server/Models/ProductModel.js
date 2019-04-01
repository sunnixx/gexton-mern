const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productName: {type:String,lowercase: true},
    productQuantity: {type:Number},
    productPrice: {type:Number},
    productImage: {type:String},
    productDescription: {type:String}
})

module.exports = mongoose.model('Products',ProductSchema)