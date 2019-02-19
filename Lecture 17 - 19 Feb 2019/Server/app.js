const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const DATA = [] //This will act as a DB

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html')
    // res.send("Hello World")
})

app.post('/getinfo',(req,res) => {
    let firstName = req.body.fName;
    let lastName = req.body.lName;

    DATA.push({firstName: firstName,lastName: lastName})

    res.redirect('/') //This will redirect to the main page
})

app.get('/employeedata',(req,res) => {
    res.sendFile(__dirname + '/public/employeedata.html')
})

app.get('/showallinfo',(req,res) => {
    res.send(DATA)
})

app.listen(3000)