const express = require('express')
const bodyParser = require('body-parser')

const shared = require('./shared')

const app = express()

app.listen(shared.port,(err) => {
    if(err) throw new Error(err)

    console.log("Server connected to http://localhost:" + shared.port)
})