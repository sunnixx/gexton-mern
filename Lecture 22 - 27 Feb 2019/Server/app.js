const express = require('express')
const bodyParser = require('body-parser')

const shared = require('./Shared')
const userRoutes = require('./Routes/UserRoutes')

const app = express()

//Middleware
app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(userRoutes)

app.listen(shared.port,(err) => {
    if(err) throw new Error(err)
    console.log("Server connected to http://localhost:"+shared.port)
})