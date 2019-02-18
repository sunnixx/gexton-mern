//Import Express server from node_modules

const express = require('express');

const app = express() //Calling constructor of Express (Invoke express main method)

//REST APIs (Routes)

app.get('/',(request,response) => {
    response.send("Hello World")
}) // "/" -> Home URL (http://www.example.com or www.google.com)

app.get('/batman',(request,response) => {
    response.send("I am BATMAN !!")
})

app.get('/superman',(request,response) => {
    response.send("This looks like a job for SUPERMAN !! ")
})

app.get('/random',(request,response) => {
    response.send("<h1>This is a header tag </h1>")
})

app.get('/greetings',(request,response) => {
    response.send("Hola!")
})

app.get('/runhtml',(request,response) => {
    //Insert code to run the .html file located in public folder
})

//We need to define a PORT number to our SERVER
//Browser -> PORT 80
// Database -> PORT 3360
// Server -> 3000 or 4000 or 5000 or 6000

app.listen(5000) //Client will send request to this port no. 
