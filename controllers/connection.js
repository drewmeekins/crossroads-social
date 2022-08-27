// //require mongoose
// const mongoose = require('mongoose')

// //establish connection to my database
// const mongoURI= 
//     process.env.NODE_ENV === 'production'
//         ? process.env.DB_URL: 'mongodb+srv://drew:1234@cluster0.twtuaog.mongodb.net/?retryWrites=true&w=majority'

// mongoose
//     .connect(mongoURI)
//     .then((instance) => 
//         console.log(`connected to ${instance.connections[0].name}`))
//     .catch((error) =>
//         console.log(`connection failed`, error))

// //export mongoose
// module.exports = mongoose