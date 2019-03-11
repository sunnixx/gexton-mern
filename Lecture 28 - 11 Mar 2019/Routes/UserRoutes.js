const express = require('express')
const router = express.Router()
const multer = require('multer')

const User = require('../Models/UserModel')
const Account = require('../Models/UserAccount')
const Products = require('../Models/Products')

const upload = multer({dest: 'client/uploads/img'})

var UserAccount = ''

router.get('/product',(req,res) => {
    let path = __dirname.split('/Routes')[0]
    res.sendFile(path + '/client/product.html')
})

router.post('/product',upload.single('productpic'),(req,res) => {
    let products = new Products()

    let path = req.file.path.split('client/')[1]
    console.log(path)

    products.name = req.body.name
    products.price = req.body.price
    products.pic = path

    products.save((err) => {
        if(err) throw new Error(err)

        res.send("Product uploaded")
    })
})

router.get('/allproducts',(req,res) => {
    Products.find({},(err,products) => {
        if(err) throw new Error(err)

        res.json(products)
    })
})

router.post('/login',(req,res) => {
    let username = req.body.username
    let password = req.body.password
    
    User.findOne({"username" : username},(err,user) => {
        console.log(user)
        if(user === null) {
            res.send("Username not found")
        } else if(user.comparePassword(password) === false) {
            res.send("Password is incorrect")
        } else {
            UserAccount = user
            res.redirect('/account')
        }
    })
})

router.get('/account',(req,res) => {

    let path = __dirname.split('/Routes')[0]
    res.sendFile(path + '/client/account.html')
})

router.get('/showaccount',(req,res) => {
    Account.findOne({"uid" : UserAccount._id},(err,account) => {
        if(err) throw new Error(err)

        res.send(account)
    })
})

router.post('/signup',(req,res) => {
    let user = new User()

    user.username = req.body.username
    user.password = req.body.password
    user.email = req.body.email

    user.save((err) => {
        if(err) throw new Error(err)

        //Create Account Collection here
        let account = new Account()
        account.uid = user._id

        account.save((err) => {
            if(err) throw new Error(err)
        })

        res.send("User account created")
    })
})

module.exports = router;