// Functions

// let a = 5
// let b = 10

// console.log(a + b)

// a = 20
// b = 30

// console.log(a + b)

// a = 30
// b = 40

// console.log(a + b)

// function add() {
//     //Body of the function 
//     // This is where you will write your code snippet

//     let a = 30
//     let b = 50

//     console.log(a + b)
// }

//Invoke my Function
// add() //This is invoking your function

//Add Parameters in our function

// function add(a,b) {
//     console.log(a + b)
// }

// add(10,20) 
// add(40,20)

//Parameters function add(a,b) -> a,b is a parameter

//Arguments add(10,20) -> 10,20 is the argument

//Return Statements

// function add(a,b) {
//     return a + b
// }

// let answer = add(10,20)

// let output = answer * 2

// console.log(output)

// function giveMeAnything(a,b,c,d,e) {
//     console.log(typeof a,a)
//     console.log(typeof b,b)
//     console.log(typeof c,c)
//     console.log(typeof d,d)
//     console.log(typeof e,e)
// }

// giveMeAnything(10,10.234,"Hello World",true,[1,2,12,12,12,12,12])

// function greeting(sayHello) {
//     if(typeof sayHello !== "string") {
//         console.error("Add a string value")
//     } else {
//         return sayHello
//     }
// }

// console.log(greeting("Hello"))

function handleClick() {
    let text = document.getElementById('inputText').value
    
    document.getElementById("container").innerHTML = "<h1>" + text + "</h1>"
}