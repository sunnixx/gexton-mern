const express = require('express')
const router = express.Router()

const User = require('../Models/UserModel')

router.post('/login',(req,res) => {
    let username = req.body.username
    let password = req.body.password
    
    User.findOne({"username" : username},(err,user) => {
        console.log(user)
        if(user === null) {
            res.send("Username not found")
        } else if(user.comparePassword(password) === false) {
            res.send("Password is incorrect")
        } else {
            res.send("Welcome you have logged in")
        }
    })
})

router.post('/signup',(req,res) => {
    let user = new User()

    user.username = req.body.username
    user.password = req.body.password
    user.email = req.body.email

    user.save((err) => {
        if(err) throw new Error(err)

        res.send("User created")
    })
})

module.exports = router;