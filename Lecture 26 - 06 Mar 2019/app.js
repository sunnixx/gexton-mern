const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const shared = require('./config/shared')
const UserRoutes = require('./Routes/UserRoutes')

//Database connection
mongoose.connect(shared.dbPath,{useNewUrlParser: true},(err) => {
    if(err) throw new Error(err)

    console.log("Database connected")
})

//Middleware
app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(UserRoutes)

app.listen(shared.port,(err) => {
    if(err) throw new Error(err)

    console.log("Server connected to http://localhost:"+shared.port)
})