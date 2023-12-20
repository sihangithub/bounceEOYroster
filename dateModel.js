const mongoose = require('mongoose')

const dateSchema = mongoose.Schema({
    dateString: {
        type: String,
        required: false
    }, inputDates: {
        type: Array,
        required: false
    }
})

const dateModel = mongoose.model('date', dateSchema)
module.exports = dateModel