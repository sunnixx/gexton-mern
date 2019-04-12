const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

const PublicRoutes = require('./Routes/PublicRoutes')

const shared = require('./shared')

const app = express()

require('./config/passport') //this will bring in the code of passport

mongoose.connect(shared.db,{useNewUrlParser: true},(err) => {
    if(err) throw new Error(err)
    console.log('Database connected')
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'HelloWorld'
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(PublicRoutes)


app.listen(shared.port,(err) => {
    if(err) throw new Error(err)

    console.log("Server connected to http://localhost:" + shared.port)
})