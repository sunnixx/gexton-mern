const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserAccount = new Schema({
    uid: {type:String, unique: true},
    firstName: {type:String, uppercase: false, default: ''},
    lastName: {type:String, uppercase: false, default: ''},
    phone: {type: Number, defualt: 0},
    address: {type:String, uppercase: false, default: ''}
})

module.exports = mongoose.model('Account',UserAccount)