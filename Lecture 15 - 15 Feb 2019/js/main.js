/**Promises
 * Object Oriented Programming (Basics)
 */

//  function doSomething() {
//      return "Hello"
//  }
let doCalculation = 0

// new Promise((resolve,reject) => {
//     // doCalculation = Math.floor(Math.random() * 10)
//     // resolve(doCalculation)
//     fetch('http://nodedatastore.herokuapp.com/demo')
//     .then((response) => {
//         resolve(response)
//     })
//     .catch((err) => {
//         console.error('error of fetch' + err)
//     })
// })
// .then(() => {
//     console.log('This will run if resolve() ran successful')
// })
// .catch((err) => {
//     console.error('error on main promise' + err)
// })


// let server = new Promise((resolve,reject) => {
//     setTimeout(function() {
//         resolve("Success")   
//     })
// })
// .then((response) => {
//     console.log(response)
// })
// .then((response) => {
//     console.log(response)
// })
// .catch((err) => {
//     console.log(err)
// })

// let DATA = []
// DATA = [12,1,2,12,12,12]

// new Promise((resolve,reject) => {
//     // if(DATA.length >= 6) {
//     //     resolve("Array is working fine")
//     // } else {
//     //     reject("The length is not fine")
//     // }
//     DATA.push(12)
//     if(DATA.length - 1 < 6) {
//         resolve("Array runs fine")
//     } else {
//         reject("Someone tried to add a new value to the array")
//     }
// })
// .then((response) => {
//     console.log('Success: ' + response)
// })
// .catch((err) => {
//     console.log('Catch Error: ' + err)
// })

// fetch('')
// .then()
// .catch()

let save = new Promise((resolve,reject) => {
    fetch('http://nodedatastore.herokuapp.com/demo')
    .then((response) => {
        resolve(response.json())
    })
    .catch((err) => {
        reject(err)
    })
})
.then(response => {
    response.then(items => {
        console.log(items)
    })
})
.catch(err => {
    console.error(err)
})

async function save() {
    await fetch('http://nodedatastore.herokuapp.com/demo')
    .then((response) => {
        response.json().then(items => {
            console.log(items)
        })
    })
    .catch((err) => {
        console.log(err)
    })
}





