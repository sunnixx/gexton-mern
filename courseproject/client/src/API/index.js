const app = {}

app.dummy = async function() {
    fetch('http://localhost:5000/dummy')
    .then(response => {
        response.json().then(products => {
            localStorage.products = JSON.stringify(products)
        })
    })
}

app.product = async function(id,cb) {
    await fetch('http://localhost:5000/product',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    })
    .catch(err => {
        throw new Error(err)
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

app.verfiy = async function(cb) {
    await fetch('http://localhost:5000/verify')
    .then(response => {
        response.json().then(message => {
            if(!message.state) {
                cb(message.state)
            } else {
                localStorage.user = message.user
                cb(message.state)
            }
        })
    })
    .catch(err => {
        if(err) throw new Error(err)
    })
}

app.logout = async function(cb) {
    await fetch('http://localhost:5000/logout')
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    }).catch(err => {
        if(err) throw new Error(err)
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

app.buy = async function(firstname,lastname,month,year,cvc,card,cb) {
    fetch('http://localhost:5000/buy',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            firstname,
            lastname,
            month,
            year,
            cvc,
            card
        })
    })
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    })
    .catch(err => {
        if(err) throw new Error(err)
    })
}

export default app;