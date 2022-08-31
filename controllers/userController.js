// const bcrypt = require('bcrypt')
// const express = require('express')
// const router = express.Router()
// const User = require('../models/users.js')

// router.get('/register/', (req, res) => {
//   res.render('profile/newProfile')
// })

// router.post('/register', (req, res) => {
//     //overwrite the user password with the hashed password, then pass that in to our database

//     const salt = bcrypt.genSaltSync(10)
//     req.body.password = bcrypt.hashSync(req.body.password, salt)
//     console.log(req.body)

//     User.findOne({username: req.body.username}, (err, userExists) => {
//         if(userExists) {
//             res.send('That username is taken')
//         }else{
//             User.create(req.body, (err, createdUser) => {
//                 console.log('user is created', createdUser)
//                 res.redirect('/')
//             })
//         }
//     })   
// })

// module.exports = router