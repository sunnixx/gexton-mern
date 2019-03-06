const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const Schema = mongoose.Schema;

/**
 * 1 - Create Schema of the database
 * 2 - Create model of the schema
 */
// JoHn => john
const UserSchema = new Schema({
    username: {type:String, uppercase: false},
    password: String,
    email: {type:String, unique: true, uppercase: false},
    token: {type:String, default: ''}
})

UserSchema.pre('save',function(next) {
    //This is where I will encrypt my password
    bcrypt.hash(this.password,null,null,(err,hash) => {
        if(err) throw new Error(err)

        this.password = hash;
        next() //Jump to the next tick function()
    })
})

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password,this.password)
} 

module.exports = mongoose.model('User',UserSchema)