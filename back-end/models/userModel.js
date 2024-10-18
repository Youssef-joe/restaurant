const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
   username: {type: String, required: true, unique: true},
   userEmail: {type: String, required: true},
   hashedPass: {type: String, required: true},
   role: {type: String, default: 'user'}
})

const User = mongoose.model('user', userSchema)

module.exports = User