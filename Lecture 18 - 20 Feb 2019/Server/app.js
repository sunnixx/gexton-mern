const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const Db = require('./Db/Db.json')

//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/client'))

app.post('/login',(req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    Db.forEach((user) => {
        if(user.username === username) {
            if(user.password === password) {
                res.send({
                    "message" : "Welcome you have logged in"
                })
            } else {
                res.send({
                    "message" : "password is incorrect"
                })
            }
        } else {
            res.send({
                "message" : "username not found"
            })
        }
    })
})

app.listen(3000,(err) => {
    if(err) throw new Error(err)

    console.log("Server is connected on http://localhost:3000")
})