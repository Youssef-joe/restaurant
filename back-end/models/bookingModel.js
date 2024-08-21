const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  name : String,
  data: Date,
  time: String,
  status: {type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending'}

})

module.exports = mongoose.model('booking', bookingSchema)
// const mongoose = require('mongoose')

// const bookingSchema = new mongoose.Schema({
//     user: { type: Schema.Types.ObjectId, ref: 'User' },
//     date: Date,
//     time: String,
//     status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
//   });
  
//   module.exports = mongoose.model('Booking', bookingSchema);
  