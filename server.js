// setup requirements
const express = require('express')
const app = express()
const Profile = require('./models/profiles')
const Location = require('./models/locations')
const methodOverride = require('method-override')
const profileController = require('./controllers/profileController')
const locationController = require('./controllers/locationController')

// View Setup
app.set('view engine', 'ejs')

// require .env file
require('dotenv').config()
const PORT = process.env.PORT
// const PORT = 3000

// setup mongoose
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// middleware
app.use((methodOverride('_method')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('static'))
app.use(profileController)
app.use(locationController)

// index route
app.get('/', (req, res) => {
    res.send('Welcome To Crossroads')
})

// setup server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})