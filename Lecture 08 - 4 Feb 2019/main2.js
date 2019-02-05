let username = prompt("Enter your username");

function render() {
    let input = document.getElementById("input").value;
    document.getElementById("container").innerHTML += 
    "<li style='list-style:none'>" + username + ": " + input + "</li>"
    document.getElementById("input").value = "";
}

function save() {
    //This function will save our chat messages
}

function load() {
    //This function will load our chat messages when we re-run the app
}

function edit() {
    //This function will edit our chat messages
}

/**a = 2
 * a += 2 -> a = 2 + 2
 */