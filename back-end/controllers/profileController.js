const User = require('../models/userModel.js')


let viewProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')

        if (!user) {
            return res.status(400).json({message : "user not found"})
        }

        res.status(200).json(user)

    } catch(er) {

        console.error(er)
        res.status(500).json({message : "server error"})

    }
}

let updateProfile = async (req,res) => {
    try {
        const {name, email} = req.body

        let updateUser = await User.findByIdAndUpdate(
            req.user.id,
            {name, email},
            {new : true}
        ).select('-password')

        if (!updateUser) {
            return res.status(400).json({message : "user not found"})
        }

        res.status(200).json({
            message : "user has been updated successfully",
            data : updateUser
        })

    } catch(er) {

        console.error(er)
        res.status(500).json({message : "server error"})

    }
}

module.exports = {
    viewProfile,
    updateProfile
}