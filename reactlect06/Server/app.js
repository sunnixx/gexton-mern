const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')

const User = require('./Models/UserModel')

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('mongodb://localhost:27017/reactdb',{useNewUrlParser: true},(err) => {
    if(err) throw new Error(err)
    console.log("Database connected")
})

app.get('/',(req,res) => {

})

app.post('/signup',(req,res) => {
    const user = new User()

    user.username = req.body.username
    user.password = req.body.password

    user.save((err) => {
        if(err) throw new Error(err)
        res.json({
            message: 'user has been saved'
        })
    })
})

app.post('/login',(req,res) => {
    User.findOne({username: req.body.username},(err,user) => {
        if(err) throw new Error(err)

        if(user === null) {
            res.json({
                message: 'Username not found'
            })
        }

        console.log(user)

        if(user.password !== req.body.password) {
            res.json({
                message: 'password incorrect'
            })
        } else {
            res.json(user)
        }
    })
})

app.listen(5000,(err) => {
    if(err) throw new Error(err)

    console.log("Server started on http://localhost:5000")
})