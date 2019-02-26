const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const app = express()

const db = require('./Db/Db.json')

//Middleware
// app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res) => {
    db.forEach((user) => {
        if(user.token !== '') {
            res.redirect('/protected/welcome')
        } else {
            res.sendFile(__dirname + '/client/index.html')
        }
    })
})

app.post('/public/welcome', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    db.forEach((user) => {
        if (user.username === username) {
            if (user.password === password) {
                user.token = jwt.sign({ "username": username, "password": password }, 'HELLOWORLD')
                fs.writeFileSync(__dirname + '/Db/Db.json', JSON.stringify([{
                    "username": user.username,
                    "password": user.password,
                    "token": user.token
                }]))
                res.send("Token generated" + user.token)
            } else {
                res.send("Password incorrect")
            }
        } else {
            res.send("username incorrect")
        }
    })
})

app.get('/protected/welcome', (req, res) => {
    db.forEach((user) => {
        jwt.sign(user.token, 'HELLOWORLD', (err, data) => {
            if (err) res.send("Please authenticate")
            res.send("Welcome to protected page")
        })
    })
})

app.listen(3000, (err) => {
    if (err) throw new Error(err)

    console.log('Server connected to http://localhost:3000')
})