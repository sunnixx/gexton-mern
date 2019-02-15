// async function save() {
//     await fetch('http://nodedatastore.herokuapp.com/testdata')
//     .then(function(response) {
//         response.json().then(function(items) {
//             console.log(items)
//         })
//     })
// }

// let obj = {
//     name: 'John',
//     salary: 10000,
//     getValues: function() {
//         return [this.name,this.salary]
//     }
// }

// function doSomething() {
//     return this;
// }

// let obj = {
//     name: 'John',
//     doSomething: doSomething
// }

// console.log(obj.doSomething.bind(this)())
// var name = 'Jane';

// let doSomethingElse = {
//     doSomething: doSomething,
//     name: 'John'
// }

// let anotherObj = {
//     name: 'Jane'
// }

// console.log(doSomethingElse.doSomething.bind(anotherObj)().name)


// let doSomething = () => {
//     //Auto binded to the context at which it is running
// }

// let doSomething = function() {

// }

// fetch('http://nodedatastore.herokuapp.com')
// .then((response) => {response.json().then((item) => {
    
// })})

// fetch('http://nodedatastore.herokuapp.com')
// .then(function(response) {
//     response.json().then(function(item) {

//     })
// })

// let greetings = () => {
//     console.log("Hello")
// }

// greetings()


// document.getElementById('btn').addEventListener('click',() => {
    
// })

// function doSomething(fn,ln,cb) {
//     cb(fn,ln);
// }

// doSomething("john","doe",(a,b) => {
//     console.log(a,b)
// })

// doSomething("john","doe",function(a,b) {
//     console.log(a,b)
// })

api.sendDataToServer("This is a demo data")