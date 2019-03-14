const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../Models/UserModel')

//Create Strategy
passport.use('local',new LocalStrategy(
    function(username,password,done) {
        User.findOne({"username" : username},function(err,user) {
            if(err) return done(err)

            if(!user) return done(null, false)

            if(!user.comparePassword(password)) return done(null, false)

            return done(null,user)
        })
    }
))

passport.serializeUser(function(user,done) {
    done(null, user._id)
})

passport.deserializeUser(function(id,done) {
    User.findById(id,function(err,user) {
        done(err,user)
    })
})

module.exports = passport;