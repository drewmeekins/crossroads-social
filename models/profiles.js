// requirements
const mongoose = require('mongoose')

// create the schema
const profileSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: String,
    name: { type: String, required: false },
    dob: { type: String, required: false },
    location: { type: String, required: false },
    interests: { type: String, required: false },
    img: { type: String, required: false },
    commentName: { type: String, required: false },
    comment: [{ type: String, required: false }],
})

// create model
const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile