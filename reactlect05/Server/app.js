const express = require('express')
const app = express()
const cors = require('cors')

const Db = require('./db/list.json')

app.use(cors())

app.get('/',(req,res) => {
    res.send("Server is running")
})

app.get('/list',(req,res) => {
    res.json(Db)
})

app.get('/batman',(req,res) => {
    res.json({"message" : "I am batman"})
})

app.listen(5000,(err) => {
    if(err) throw new Error(err)
    console.log("Server is running on http://localhost:3000")
})