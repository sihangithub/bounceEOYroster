const data = require('./manualDB')
const RegisterModel = require('./registerModel')
const ShiftModel = require('./shiftModel')
const DateModel = require('./dateModel')
const STZ = require('./timezone')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const port = 8080

app.use(cors())
app.use(express.static('./client/dist'))


app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

const uri = 'mongodb+srv://sihangithub:Uniongroupof1@bouncedb.x4sphws.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(uri)
.then(() => {
    console.log('connected to the DB')
})

app.get('/api', async (req, res) => {
    const result = await RegisterModel.find()
    const shifts = await ShiftModel.find()
    const date = await DateModel.find()
    res.send({registries: result, shifts: shifts, date: date})
})

app.get('*', (req, res) => {
    // calling this route gives you the mainpage
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})



app.post('/register', async (req, res) => {
    const registerModel = new RegisterModel()

    registerModel.fName = req.body.firstName
    registerModel.lName = req.body.lastName
    registerModel.email = req.body.email

    try {
        registerModel.save().then(console.log(registerModel))
    } catch (err) {
        console.log(err)
    }
    
})

app.post('/login', async (req, res) => {
    const email = req.body.email
    const result = await RegisterModel.findOne({'email' : email})
    if (result) { 
        console.log(result.fName + ' ' + result.lName)
    }
   
})

app.post('/shift', async (req, res) => {
    const shiftModel = new ShiftModel()
    const shift = req.body
    shiftModel.name = shift.name
    shiftModel.day = shift.day
    shiftModel.shift = shift.shift
    shiftModel.remark = shift.remark
    try {
        await shiftModel.save().then(console.log(shiftModel))
        console.log('saved!')
    } catch (err) {
        throw err
    }         
})

app.post('/date', async (req, res) => {
    // At any one point, there can only have 1 date document
    const dateModel = new DateModel()
    await DateModel.deleteMany({})
    dateModel.dateString = req.body.dateString
    dateModel.inputDates = req.body.inputDates
    await dateModel.save()
})

app.delete('/reset', async (req, res) => {
    await ShiftModel.deleteMany({})
    console.log('shift reset!')
})

app.delete('/delete-users', async (req, res) => {
    await RegisterModel.deleteMany({})
    console.log('all users deleted')
})



app.listen(port, () => {
    console.log('port running on: ' + port)
    console.log(data)
} )

