const express = require('express')
const router = express.Router()
const Location = require('../models/locations')

// router.get('/locationseed', async (req, res) => {
//     const newLocation = 
//         [
//             {
//                 name: 'Washington, DC',
//                 recommendation: 'El Rey',
//                 img: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTczMzMzNjYxODgwNDI4NDAz/washington-dc-gettyimages-74063516.jpg'
//             }
//         ]
//     try {
//         const seedItems = await Location.create(newLocation)
//         res.send(seedItems)
//     } catch (err) {
//         res.send(err.message)
//     }
// })


module.exports = router