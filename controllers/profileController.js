const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const session = require('express-session')
const Profile = require('../models/profiles')
// const Comments = require('../models/comments')

// custom middleware
// const authRequired = (req, res, next) => {
//     if(req.session.currentUser){
//         next()
//     }else{
//         res.send('You must be logged in to do that.')
//     }
// }



// adding seed route
// router.get('/profileseed', async (req, res) => {
//     const newProfile = 
//         [
//             {
//                 username: 'Drew',
//                 name: 'Drew',
//                 dob: 'September 14',
//                 location: 'Washington, DC',
//                 interests: 'Music',
//                 img: 'https://www.creativeuncut.com/gallery-27/art/mgs5-diamond-dogs-crest.jpg'
//             }
//         ]
//     try {
//         const seedItems = await Profile.create(newProfile)
//         res.send(seedItems)
//     } catch (err) {
//         res.send(err.message)
//     }
// })


// register route
router.get('/register', (req, res) => {
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

// sign in route
router.get('/signin', (req, res) => {
    res.render('profile/signIn', {
        currentUser: req.session.currentUser
    })
})

// sign in post route
router.post('/signin', (req, res) => {
    Profile.findOne({username: req.body.username}, (err, foundUser) => {
        if(foundUser){
            const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
            if(validLogin){
                req.session.currentUser = foundUser
                res.redirect(`/profile/${foundUser.username}`)
            }else{
                res.send('Invalid username or password')
            }
        }else{
            res.send('Invalid username or password')
        }
    })
})

// destroy session
router.get('/signout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

router.get('/homeprofile',  (req, res) => {
    const foundUser = req.session.currentUser
    Profile.findOne({username: req.params.username}, (err, userExists) => {
        if(userExists) {
            res.render('profile/homeProfile', {
                profile: foundUser,
                // comment: Comments
            })
        }else{
            res.send('user not found')
        }
    }) 
})


// // profile show route
router.get('/:username', async (req, res) => {
    const foundUser = req.session.currentUser
    const profile = await Profile.find({username: req.body.username})
    Profile.findOne({username: req.params.username}, (err, userExists) => {
        if(userExists){
            res.render('profile/showProfile', {
                profile: foundUser,
                // comment: Comments
            })
        }else{
            res.render('profile/showProfile', {
                profile: profile,
                // comment: Comments
            })
        }
    }) 
    console.log(foundUser)
}) 


// profile show route
// router.get('/:username', async (req, res) => {
//     // const foundUser = req.session.currentUser
//     let profile = await Profile.findById(req.params.username)
//             res.render('profile/showProfile', {
//                 profile: profile
//                 // comment: Comments
//             })
//         console.log(profile)
//     }) 

// delete route
router.delete('/:username', (req, res) => {
    Profile.findOneAndRemove(req.params.username, (err, data) => {
        if(err) console.log(err)
        res.redirect('/')
    })
})

// edit route
router.get('/:username/edit', (req, res) => {
    const foundUser = req.session.currentUser
    res.render('profile/editProfile', {
        profile: foundUser
    })
})

// update route
router.put('/:username', (req, res) => {
    let foundUser = req.session.currentUser
    // console.log(req.body)
    // console.log(foundUser)
    Profile.findOneAndUpdate(foundUser, 
        {
            username: req.body.username,
            // password: req.body.password,
            name: req.body.name,
            dob: req.body.dob,
            location: req.body.location,
            interests: req.body.interests,
            img: req.body.img,
            // comment: req.body.comment
        }, 
        (err) => {
            res.redirect(`/profile/${foundUser.username}`)
    })    
    
    // foundUser = req.body
    console.log(req.session)
})


module.exports = router