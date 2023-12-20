const RegisterModel = require('./registerModel')
const bcrypt = require('bcryptjs')
const localStrategy = require('passport-local').Strategy

module.exports = function(passport) {
    new localStrategy((email, done) => {
        const results = RegisterModel.find()
        if (err) throw err
        if (!user) return done(null, false)
        results.forEach(element => {
            bcrypt.compare(element.email, email, (err, result) => {
                if (err) throw err
                if (result === true){
                    return done(null, user)
                } 
            })
        })
        return done(null, false);
    })


}