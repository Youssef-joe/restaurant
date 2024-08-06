const bookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    time: String,
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
  });
  
  module.exports = mongoose.model('Booking', bookingSchema);
  