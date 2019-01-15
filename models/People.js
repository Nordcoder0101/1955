const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = Schema({
  name: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Person', personSchema)