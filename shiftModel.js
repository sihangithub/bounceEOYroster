const mongoose = require('mongoose')

const shiftSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, shift: {
        type: Array,
        required: true
    }, day: {
        type: String,
        required: true
    }, remark: {
        type: String,
        required: false
    }
})

const newShiftModel = mongoose.model('availabilities', shiftSchema)

module.exports = newShiftModel