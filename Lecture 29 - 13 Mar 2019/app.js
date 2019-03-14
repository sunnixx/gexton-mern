const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passportConfig = require('./config/passport')
const passport = require('passport')

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
app.use(cookieParser())
app.use(session({
    secret: 'HelloWorld',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({url: shared.dbPath}) 
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(UserRoutes)

app.listen(shared.port,(err) => {
    if(err) throw new Error(err)

    console.log("Server connected to http://localhost:"+shared.port)
})