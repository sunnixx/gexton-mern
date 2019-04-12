const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const db = require('../dummydb');
const User = require('../Models/UserModel')
const shared = require('../shared')

const route = express.Router()

route.get('/dummy',(req,res) => {
    res.send(db)
})

route.get('/verify',(req,res,done) => {
    console.log(req.user)
})

route.post('/logout',(req,res,done) => {
    req.logout()
    res.json({
        state: false
    })
})

route.get('/pass',(req,res,next) => {
    console.log("pass")
})

route.get('/fail',(req,res,next) => {
    console.log("fail")
})

route.post('/login',passport.authenticate('local',{failureRedirect:'/fail'}),(req,res,next) => {
    let user = req.user;
    res.json({
        username: user.username,
        email: user.email,
        state: true
    })
})

// route.post('/login',(req,res,next) => {
//     passport.authenticate('local', function(err,user,info) {
//         if(err) return next(err)

//         if(!user) return res.json({
//             message:'Username or Password incorrect',
//             state: false
//         })

//         req.logIn(user,function(err) {
//             if(err) return next(err)
//             res.json({
//                 username:user.username,
//                 email: user.email,
//                 state: true
//             })
//         })
//     })(req,res,next)
// })

route.post('/signup',(req,res,done) => {
    const user = new User()

    user.username = req.body.username
    user.password = req.body.password
    user.email = req.body.email

    user.save((err) => {
        if(err) return done(err)
        res.json({message: 'user created'})
    })
})

route.post('/contact',(req,res) => {
    //Add this API - End point
    //The form should be sent on email
})


module.exports = route;