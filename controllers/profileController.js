const express = require('express')
const router = express.Router()
const Profile = require('../models/profiles')


// adding seed route
router.get('/seed', (req, res) => {
    Profile.create(
        [
            {
                name: 'Drew',
                dob: 'September 14',
                location: 'Washington, DC',
                interests: 'Music',
                img: 'https://www.creativeuncut.com/gallery-27/art/mgs5-diamond-dogs-crest.jpg'
            }
        ]
    )
})

// index route
router.get('/home', (req, res) => {
    res.send('Welcome To Crossroads. Please Sign Up!')
})

// profile show route
router.get('/profile/:id', (req, res) => {
    res.render('profile/showProfile')
})



module.exports = router