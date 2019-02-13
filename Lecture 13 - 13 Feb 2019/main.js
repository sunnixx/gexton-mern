//JSON 
//JavaScript Object Notation

// let employees = {
//     name: "John Doe",
//     salary: 50000,
//     isEmployed: true,
//     height: 5.11,
//     departments: ['sales','finance','HR'],
//     getValues: function() {
//         return [this.name,this.salary,this.isEmployed,this.height,this.departments]
//     }
// }

// console.log(employees.name)
// console.log(employees.salary)
// console.log(employees.departments)
// console.log(employees.getValues())

// let employess = [
//     {
//         name: 'John Doe',
//         salary: 30000
//     },{
//         name: 'Asad khan',
//         salary: 50000
//     },{
//         name: 'jumman khan',
//         salary: 70000
//     }
// ]

// employess.forEach(function(item) {
//     console.log(item.name)
//     console.log(item.salary)
// })

let username = prompt("Enter your username");
var DATA = [] //This is going to be the vessel to temporarily store our messages

load()

function render() {
    let input = document.getElementById("input").value;

    if(input !== '') {
        DATA.push({
            item: input,
            time: new Date(),
            userId: 'xyz'
        }); //Insert message inside Array
    }

    document.getElementById('container').innerHTML = '';    

    setTimeout(function(){
        for(let i in DATA) {
            document.getElementById("container").innerHTML += 
            "<li id="+i+" style='list-style:none'>" + username + ": " + DATA[i].item  + "<button onClick='edit(this)'>Edit</button><button onClick='deleteMessage(this)'>Delete</button></li>" 
        }
    },2000)

    document.getElementById("input").value = "";
    save()
}

function save() {
    //This function will save our chat messages
    // localStorage.mymessages = JSON.stringify(DATA) //This will convert my Object array into a String
    fetch('http://nodedatastore.herokuapp.com/testdata',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(DATA)
    }).then(function() {
        console.log('data stored on server')
    })
}

function load() {
    //This function will load our chat messages when we re-run the app
    // DATA = JSON.parse(localStorage.mymessages) //This will convert string into object
    fetch('http://nodedatastore.herokuapp.com/testdata')
    .then(function(response) {
        response.json().then(function(items) {
            DATA = items
        })
    })
    render()
}

function edit(obj) {
    //This function will edit our chat messages
    let Id = obj.parentNode.id;
    DATA[Id] = prompt("Edit your message")

    render()
}

function deleteMessage(obj) {
    //This function will delete message
    DATA.splice(obj.parentNode.id,1)
    render()
}

function deleteAll() {
    //This function will delete all messages
    DATA = []
    render()
}