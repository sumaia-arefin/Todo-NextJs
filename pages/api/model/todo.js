import mongoose from 'mongoose'
const { Schema } = mongoose

const blogSchema = new Schema({
    Name: String, // String is shorthand for {type: String}
    schedule: { type: String },
    body: { type: String },
    date: { type: String },
})

const blockDB = mongoose.models.blockDB || mongoose.model('blockDB', blogSchema)
module.exports = blockDB
