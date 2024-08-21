const User = require('./../models/userModel.js');
const Booking = require('./../models/bookingModel.js');

let viewUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users); 
    } catch (er) {
        console.error(er);
        res.status(500).json({ message: "server error" });
    }
};

let viewBooking = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user', 'name email');
        res.status(200).json(bookings);
    } catch (er) {
        console.error(er);
        res.status(500).json({ message: "server error" });
    }
};

let updateBookingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['accepted', 'rejected'].includes(status)) {
            return res.status(400).json({ message: "invalid status" });
        }

        const updatedBooking = await Booking.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedBooking) {
            return res.status(404).json({ message: "booking not found" });
        }

        res.status(200).json({
            message: "booking has been updated successfully",
            data: updatedBooking
        });
    } catch (er) {
        console.error(er);
        res.status(500).json({ message: "server error" });
    }
};

module.exports = {
    viewUsers,
    viewBooking,
    updateBookingStatus
};
