const Booking = require("./../models/bookingModel.js")

let bookTable = async (req,res) => {
    try {

        const {date, time} = req.body

        if (!date, !time) {
            return res.status(400).json({
                message : "data and time are required"
            })
        }

        const newBooking = new Booking({
            user: req.user.id,
            date,
            time
        })

        let done = newBooking.save()

        res.status(200).json({
            message : "table are booked successfully",
            data : done
        })

    } catch(er) {
        console.log(er.message ? er.message : er)

        res.status(500).json({
            message : "server error",
            data : er.message ? er.message : er
        })

    }
}

let getMyBookings = async (req,res) => {
    try {

        const booking = await Booking.find({user: req.user.id}).populate('user', 'name email')
        res.status(200).json(bookings)
        
    } catch(er) {
       console.error(er)
       res.status(500).json({message : "server error"})
    }
}


module.exports = {
    bookTable,
    getMyBookings
}