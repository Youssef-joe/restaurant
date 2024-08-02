const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')

let register = async (req, res) => {
    try{
        const {name, email, password} = req.body

        if (!name || !email || !password) {
            throw("All Fields are Required To Be Filled")
        }
        let oldUser = User.findOne({email : userEmail})

        if (oldUser) {
            throw("this Email is already registered")
        }

        const hashedPass = bcrypt.hash(password, 10)

        let newUser = new User({
            username: name,
            userEmail: email,
            userPass: hashedPass
        })
        await newUser.save()
        let done = await newUser.save()

        if (done) {
            res.status(200).json({
                message: "user has been registered successfully",
                data: done
            })
        }
    } catch(er) {
        console.log(er.message ? er.message : er)
    }
}

module.exports = {
    register
}