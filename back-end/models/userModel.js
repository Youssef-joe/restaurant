const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    userEmail: String,
    userPass: String
})

const User = mongoose.model('user', userSchema)

module.exports = User