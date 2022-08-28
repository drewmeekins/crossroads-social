// requirements
const mongoose = require('mongoose')

// create the schema
const profileSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: String, required: true },
    location: { type: String, required: true },
    interests: { type: String, required: false },
    img: { type: String, required: true },
})

// create model
const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile