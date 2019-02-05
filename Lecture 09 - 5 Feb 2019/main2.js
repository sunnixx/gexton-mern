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
        "<li style='list-style:none'>" + username + ": " + DATA[i]  + "<button>Edit</button><button>Delete</button></li>" 
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

function edit() {
    //This function will edit our chat messages
}

function deleteMessage() {
    //This function will delete message
}

function deleteAll() {
    //This function will delete all messages
}

/**a = 2
 * a += 2 -> a = 2 + 2
 */