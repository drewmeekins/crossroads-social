// requirements
const mongoose = require('mongoose')

// create the schema
const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    recommendation: { type: String, required: true },
    img: { type: String, required: false },
})

// create model
const Location = mongoose.model('Location', locationSchema)

module.exports = Location