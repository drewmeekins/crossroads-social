// setup requirements
const express = require('express')
const app = express()
const Profile = require('./models/profiles')
const Location = require('./models/locations')
const methodOverride = require('method-override')
const bcrypt = require('bcrypt')
const session = require('express-session')
const profileController = require('./controllers/profileController')
const locationController = require('./controllers/locationController')
const userController = require('./controllers/userController')

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
app.use(express.static('public'))
app.use(profileController)
app.use(locationController)
app.use('/users', userController)
app.use(
    session({
      secret: process.env.SECRET, 
      resave: false, 
      saveUninitialized: false 
    })
  )


// user save route
app.get('/newprofile', (req, res) => {
    req.session.newProfile = 'any value'
})

// retrieve user route
// app.get('/retrieve', (req, res) => {
//     if(req.session.newProfile === )
// })

// index route
app.get('/', (req, res) => {
    // res.send('Welcome To Crossroads')
    res.render('index')
})

// setup server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})