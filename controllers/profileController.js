const express = require('express')
const bcrypt = require('bcrypt')
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


// register route
router.get('/register/', (req, res) => {
    res.render('profile/newProfile')
  })
 
// register post route
router.post('/register', (req, res) => {
    //overwrite the user password with the hashed password, then pass that in to our database

    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    console.log(req.body)

    Profile.findOne({username: req.body.username}, (err, userExists) => {
        if(userExists) {
            res.send('That username is taken')
        }else{
            Profile.create(req.body, (err, createdUser) => {
                console.log('user is created', createdUser)
                res.redirect('/')
            })
        }
    })   
})




// // new profile route
// router.get('/newprofile', (req, res) => {
//     // res.send('Welcome To Crossroads. Please Sign Up!')
//     res.render('profile/newProfile')
// })

// // sign in route
// router.get('/signin', (req, res) => {
//     // res.send('Welcome To Crossroads. Please Sign Up!')
//     res.render('profile/signIn')
// })

// profile show route
router.get('/profile/:id', (req, res) => {
    res.render('profile/showProfile')
})



module.exports = router