const menuSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String
  });
  
  module.exports = mongoose.model('MenuItem', menuSchema);
  