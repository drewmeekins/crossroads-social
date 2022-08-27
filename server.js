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
// const PORT = process.env.PORT
const PORT = 3000
const mongodbURI = process.env.MONGODBURI

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