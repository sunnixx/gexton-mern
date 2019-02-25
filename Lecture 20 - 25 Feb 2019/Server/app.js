const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const db = require('./Db/Db.json')

const DB = db;

//Middleware
app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/about',(req,res) => {
    res.sendFile(__dirname + '/client/about.html')
})

app.get('/contact',(req,res) => {
    res.sendFile(__dirname + '/client/contact.html')
})

app.post('/',(req,res) => {
    let username = req.body.username
    let password = req.body.password

    console.log(username,password)

    DB.forEach((user) => {
        if(user.username === username) {
            // console.log("works")
            if(user.password === password) {
                // console.log("works")
                user.isLogin = true
                res.redirect('/protected/welcome')
            } else {
                res.redirect('/')
            }
        } else {
            res.redirect('/')
        }
    })
})

app.get('/protected/home',(req,res) => {
    //Protected Route
    DB.forEach((user) => {
        if(user.isLogin === false) {
            res.send("You don't have access rights here")
        } else {
            res.send("Welcome to the main screen")
        }
    })
})

app.get('/protected/bankaccount',(req,res) => {
    DB.forEach((user) => {
        if(user.isLogin === false) {

        } else {
            
        }
    })
})

app.listen(3000,(err) => {
    if(err) throw new Error(err)

    console.log("Server connected to http://localhost:3000")
})

// JWT  -> Json Web Token