const express = require('express')
const router = express.Router()

router.get('/batman',(req,res) => {
    res.send("I am batman")
})

module.exports = router;