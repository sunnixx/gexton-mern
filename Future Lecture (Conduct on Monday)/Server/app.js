const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/signup',(req,res) => {
    res.sendFile(__dirname + '/client/Pages/Signup.html')
})

app.post('/login',(req,res) => {
    //Insert code to login
    let username = req.body.username
    let password = req.body.password
})

app.post('/signup',(req,res) => {
    //Insert code to signup
    let username = req.body.username
    let password = req.body.password
})

app.listen(3000,(err) => {
    if(err) throw new Error(err)

    console.log('Server connected to http://localhost:3000')
})