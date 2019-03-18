const express = require('express')
const app = express()

const UserRoutes = require('./Routes/UserRoutes')

app.use(UserRoutes)

app.listen(process.env.PORT,(err) => {
    console.log(err)
})