const express = require('express')
const Router = express.Router()

Router.get('/',(req,res) => {
    res.send("Hello World from Routes")
})

module.exports = Router;