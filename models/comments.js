// requirements
const mongoose = require('mongoose')

// create the schema
const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
})

// create model
const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
