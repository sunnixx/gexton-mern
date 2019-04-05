const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type:String, unique: true, lowercase: true},
    password: {type:String},
    email: {type:String, lowercase: true, unique:true},
    personalInformation:{
        firstName: {type:String, lowercase: true},
        lastName: {type:String, lowercase: true}
    }
})

module.exports = mongoose.model('User',UserSchema);