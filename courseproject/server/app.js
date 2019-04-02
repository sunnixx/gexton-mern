const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const db = require('./dummydb');

const shared = require('./shared')

const app = express()

app.use(cors())

app.get('/dummy',(req,res) => {
    res.send(db)
})

app.listen(shared.port,(err) => {
    if(err) throw new Error(err)

    console.log("Server connected to http://localhost:" + shared.port)
})