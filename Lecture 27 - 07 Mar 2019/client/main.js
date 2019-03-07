if(window.location.href === 'http://localhost:3000/account') {
    fetch('/showaccount')
    .then(response => {
        response.json().then(account => {
            console.log(account)
            document.getElementById('container').innerHTML += account.firstName + ' ' + account.lastName
        })
    })
}

if(window.location.href === 'http://localhost:3000/product') {
    fetch('/allproducts')
    .then(response => {
        response.json().then(products => {
            // console.log(products)
            products.map((items) => {
                document.getElementById('container').innerHTML += 
                `<h1>Name: ${items.name}</h1><h1>Price: ${items.price}</h1><img widht='100' height='100' src=${items.pic} />`
            })
        })
    })
}