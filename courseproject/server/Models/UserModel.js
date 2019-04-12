const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    username: {type:String, unique: true, lowercase: true},
    password: {type:String},
    token: {type:String},
    email: {type:String, lowercase: true, unique:true},
    personalInformation:{
        firstName: {type:String, lowercase: true},
        lastName: {type:String, lowercase: true}
    }
})

UserSchema.pre('save',function (next) {
    bcrypt.hash(this.password,null,null,(err,hash) => {
        if(err) throw new Error(err)

        this.password = hash //Store the hashed password in the db

        next() //Jump to the next tick
    })
})

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password,this.password)
}

module.exports = mongoose.model('User',UserSchema);