const app = {}

app.dummy = async function() {
    fetch('http://localhost:5000/dummy')
    .then(response => {
        response.json().then(products => {
            localStorage.products = JSON.stringify(products)
        })
    })
}

export default app;