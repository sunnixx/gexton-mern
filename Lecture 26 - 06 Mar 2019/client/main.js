fetch('/showaccount')
.then(response => {
    response.json().then(account => {
        console.log(account)
        document.getElementById('container').innerHTML += account.firstName + ' ' + account.lastName
    })
})