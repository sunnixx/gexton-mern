const express = require('express')
const router = express.Router()
const multer = require('multer')
const passport = require('passport')

const User = require('../Models/UserModel')
const Account = require('../Models/UserAccount')
const Products = require('../Models/Products')

const upload = multer({dest: 'client/uploads/img'})

router.get('/product',(req,res) => {
    if(req.user) {
        let path = __dirname.split('/Routes')[0]
        res.sendFile(path + '/client/product.html')
    } else {
        res.redirect('/')
    }
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

router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),(req,res) => {
    res.redirect('/account')
})

router.get('/logout',(req,res) => {
    if(req.user) {
        req.logout()
        res.redirect('/')
    }
})

router.get('/account',(req,res) => {
    if(req.user) {
        let path = __dirname.split('/Routes')[0]
        res.sendFile(path + '/client/account.html')
    } else {
        res.send("User needs to authenticate first")
    }
})

router.get('/showaccount',(req,res) => {
    if(req.user) {
        Account.findOne({"uid" : req.user._id},(err,account) => {
            if(err) throw new Error(err)
    
            res.send(account)
        })
    } else {
        res.send("Please authenticate first")
    }
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