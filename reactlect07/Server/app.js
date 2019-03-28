const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res) => {
    
})

app.listen(5000,(err) => {
    if(err) throw new Error(err)
    console.log("Server connected to http://localhost:5000")
})