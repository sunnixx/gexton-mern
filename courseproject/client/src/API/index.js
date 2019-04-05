const app = {}

app.dummy = async function() {
    fetch('http://localhost:5000/dummy')
    .then(response => {
        response.json().then(products => {
            localStorage.products = JSON.stringify(products)
        })
    })
}

app.login = async function(email, password, cb) {
    await fetch('http://localhost:5000/login',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(response => {
        response.json().then(message => {
            cb(message)
        })
    }).catch(err => {
        cb(err)
    })
}

app.signup = async function(username, password, email, cb) {
    await fetch('http://localhost:5000/signup',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email
        })
    })
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    })
    .catch(err => {
        cb(err)
    })
}

app.contact = async function(email, contact, subject, message,cb) {
    await fetch('http://localhost:5000/contact',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            email: email,
            contact: contact,
            subject: subject,
            message: message
        })
    })
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    })
    .catch(err => {
        cb(err)
    })
}

export default app;