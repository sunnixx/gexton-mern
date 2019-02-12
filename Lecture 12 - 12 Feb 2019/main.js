/**
 * Request types
 * 1- GET
 * 2- POST
 * 3- PUT
 */

// fetch('http://nodedatastore.herokuapp.com/')
// .then(function(response) {
//     console.log(response.json());
// })

// fetch('http://nodedatastore.herokuapp.com/ahmedfaraz',{
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify(['get potatoes','get pampers'])
// }).then(function(response) {
//     alert('Data has been sent to the server')
// })

fetch('http://nodedatastore.herokuapp.com/ahmedfaraz')
.then(function(response) {
    console.log(response.json())
})