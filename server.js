// setup requirements
const express = require('express')
const app = express()
const Profile = require('./models/profiles')
const Location = require('./models/locations')
const methodOverride = require('method-override')
const bcrypt = require('bcrypt')
const session = require('express-session')


const userController = require('./controllers/userController')

// View Setup
app.set('view engine', 'ejs')

// require .env file
require('dotenv').config()
const PORT = process.env.PORT || 3000
// const PORT = 3000

// setup mongoose
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
// mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connect(mongoURI)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})


// a local variable on all ROUTES
app.use(
    session({
      secret: process.env.SECRET, 
      resave: false, 
      saveUninitialized: false 
    })
  )

// app.use((req, res, next) => {
// 	res.locals.currentUser = req.session.currentUser

// 	// if (req.session.currentUser) {
// 	//   res.locals.authenticated = true
//   //}
// 	next()
// })

// middleware
app.use((methodOverride('_method')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
const profileController = require('./controllers/profileController')
app.use('/profile', profileController)
const locationController = require('./controllers/locationController')
app.use(locationController)
// app.use('/users', userController)




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

// fake push