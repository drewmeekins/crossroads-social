const express = require('express')
const router = express.Router()


router.get('/profile', (req, res) => {
    res.send('Welcome To Crossroads')
})

module.exports = router