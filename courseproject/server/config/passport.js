const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../Models/UserModel')

passport.use('local',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},function(email,password,done) {
    User.findOne({email:email},function(err,user) {
        if(err) return done(err)

        if(!user) {
            return done(null,false)
        }

        if(!user.comparePassword(password)){
            return done(null,false)
        }

        return done(null,user)
    })
}))


passport.serializeUser(function(user,done) {
    done(null, user._id)
})

passport.deserializeUser(function(id,done) {
    User.findById(id,function(err,user) {
        done(err,user)
    })
})

module.exports = passport;