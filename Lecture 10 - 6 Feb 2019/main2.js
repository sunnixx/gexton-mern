let username = prompt("Enter your username");
var DATA = [] //This is going to be the vessel to temporarily store our messages

load()

function render() {
    let input = document.getElementById("input").value;

    if(input !== '') {
        DATA.push(input); //Insert message inside Array
    }

    document.getElementById('container').innerHTML = '';    

    for(let i in DATA) {
        document.getElementById("container").innerHTML += 
        "<li id="+i+" style='list-style:none'>" + username + ": " + DATA[i]  + "<button onClick='edit(this)'>Edit</button><button onClick='deleteMessage(this)'>Delete</button></li>" 
    }

    document.getElementById("input").value = "";
    save()
}

function save() {
    //This function will save our chat messages
    localStorage.mymessages = JSON.stringify(DATA) //This will convert my Object array into a String
}

function load() {
    //This function will load our chat messages when we re-run the app
    DATA = JSON.parse(localStorage.mymessages) //This will convert string into object
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

/**a = 2
 * a += 2 -> a = 2 + 2
 */