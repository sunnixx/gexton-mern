const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {type:String,lowercase: true},
    price: {type:Number},
    pic: {type:String}
})

module.exports = mongoose.model('Products',ProductSchema)