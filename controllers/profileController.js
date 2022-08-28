const express = require('express')
const router = express.Router()
const Profile = require('../models/profiles')


// adding seed route
router.get('/profileseed', async (req, res) => {
    const newProfile = 
        [
            {
                username: 'Drew',
                name: 'Drew',
                dob: 'September 14',
                location: 'Washington, DC',
                interests: 'Music',
                img: 'https://www.creativeuncut.com/gallery-27/art/mgs5-diamond-dogs-crest.jpg'
            }
        ]
    try {
        const seedItems = await Profile.create(newProfile)
        res.send(seedItems)
    } catch (err) {
        res.send(err.message)
    }
})

// new profile route
router.get('/newprofile', (req, res) => {
    // res.send('Welcome To Crossroads. Please Sign Up!')
    res.render('profile/newProfile')
})

// sign in route
router.get('/signin', (req, res) => {
    // res.send('Welcome To Crossroads. Please Sign Up!')
    res.render('profile/signIn')
})

// profile show route
router.get('/profile/:id', (req, res) => {
    res.render('profile/showProfile')
})



module.exports = router