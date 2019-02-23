const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

// fs.writeFileSync(__dirname + '/files/test.txt','Hello World')

// let fileData = fs.readFileSync(__dirname + '/files/test.txt',{encoding: 'utf-8'})

// console.log(fileData)

var DATA = JSON.parse(fs.readFileSync(__dirname + '/Db/Db.json',{encoding: 'utf-8'}))

// console.log(DATA)

function saveUsernameAndPassword(username,password) {
    let data = {
        "username" : username,
        "password" : password
    }

    DATA.push(data)

    fs.writeFileSync(__dirname + '/Db/Db.json',JSON.stringify(DATA))
}

saveUsernameAndPassword("johndoe","1234")
saveUsernameAndPassword("johndoe","1234")
saveUsernameAndPassword("johndoe","1234")
saveUsernameAndPassword("johndoe","1234")
saveUsernameAndPassword("johndoe","1234")
saveUsernameAndPassword("johndoe","1234")

app.listen(3000,(err) => {
    if(err) throw new Error(err)

    console.log('Server connected to http://localhost:3000')
})