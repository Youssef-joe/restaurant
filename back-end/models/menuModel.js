const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String
  });
  
  module.exports = mongoose.model('MenuItem', menuSchema);
  