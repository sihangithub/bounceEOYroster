const mongoose = require('mongoose')

const newSchema = mongoose.Schema({
    fName: {
        type: String,
        required: false,
        trim: true
    }, lName: {
        type: String,
        required: false,
        trim: true
    }, email: {
        type: String,
        required: false,
        trim: true
    }, password: {
        type: String,
        required: false,
        trim: true
    }
}) 

const newModel = mongoose.model('people', newSchema)

module.exports = newModel