const app = {}

app.login = async function(username,password) {
    await fetch('http://localhost:5000/login',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => {
      response.json().then(message => {
        console.log(message)
      })
    })
    .catch(err => {
      if(err) throw new Error(err)
    })
}

app.signup = async function(username,password) {
    await fetch('http://localhost:5000/signup',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => {
      response.json().then(message => {
        console.log(message)
      })
    })
    .catch(err => {
      if(err) throw new Error(err)
    })
}

export default app;