const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')

const db = require('./dummydb');

const shared = require('./shared')

const User = require('./Models/UserModel')

const app = express()

mongoose.connect(shared.db,{useNewUrlParser: true},(err) => {
    if(err) throw new Error(err)
    console.log('Database connected')
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/dummy',(req,res) => {
    res.send(db)
})

app.post('/login',(req,res,done) => {
    User.findOne({email: req.body.email},(err,user) => {
        if(err) return done(err)

        if(user !== null) {
            if(user.password !== req.body.password) {
                res.json({message:'password incorrect',state: false})
            } else {
                res.json({state: true})
            }
        } else {
            res.json({message: 'User not found',state: false})
        }
    })
})

app.post('/signup',(req,res,done) => {
    const user = new User()

    user.username = req.body.username
    user.password = req.body.password
    user.email = req.body.email

    user.save((err) => {
        if(err) return done(err)
        res.json({message: 'user created'})
    })
})

app.post('/contact',(req,res) => {
    //Add this API - End point
    //The form should be sent on email
})

app.listen(shared.port,(err) => {
    if(err) throw new Error(err)

    console.log("Server connected to http://localhost:" + shared.port)
})