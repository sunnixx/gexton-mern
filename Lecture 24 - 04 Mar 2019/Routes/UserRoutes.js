const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

/**
 * 1 - Create Schema of the database
 * 2 - Create model of the schema
 */

const UserSchema = new Schema({
    username: String,
    password: String,
    email: {type:String, unique: true},
    address: String,
    phone: Number,
    salary: Number,
    // harubharu: String
})

const User = mongoose.model('User',UserSchema)


route.post('/insertdata',(req,res) => {
    let user = new User()  
    
    user.username = req.body.username
    user.password = req.body.password
    user.email = req.body.email
    user.address = req.body.address
    user.phone = req.body.phone
    user.salary = req.body.salary
    // user.harubharu = "hello"

    user.save((err) => {
        if(err) throw new Error(err)

        res.send("Data inserted")
    })
})

route.get('/getdata',(req,res) => {

    //let keyword = req.body.search

    User.find({"email" : "janedoe@example.com"},(err,user) => {
        if(err) throw new Error(err)

        res.send(user)
    })
})

route.get('/showallrecord',(req,res) => {
    User.find({},(err,user) => {
        //Keep the options empty
        if(err) throw new Error(err)

        res.send(user)
    })
})

module.exports = route;