const api = {}

api.getDataFromServer = function() {
    fetch('http://nodedatastore.herokuapp.com/demo')
    .then((response) => {
        response.json().then((items) => {
            console.log(items)
        })
    })
}

api.sendDataToServer = function(data) {
    fetch('http://nodedatastore.herokuapp.com/demo',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({item: data})
    })
    .then(() => console.log('data sent to server'))
}

api.editDataOnServer = function(data) {
    
}