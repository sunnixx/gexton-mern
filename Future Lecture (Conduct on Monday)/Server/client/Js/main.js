document.getElementById('loginForm').addEventListener('submit',(e) => {
    e.preventDefault();

    let username = e.target.username
    let password = e.target.password

    fetch('/login',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            "username" : username,
            "password" : password
        })
    })
})

document.getElementById('signupForm').addEventListener('submit',(e) => {
    e.preventDefault();

    let username = e.target.username
    let password = e.target.password

    fetch('/signup',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            "username" : username,
            "password" : password
        })
    })
})