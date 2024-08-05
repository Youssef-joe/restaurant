const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');

let register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required to be filled' });
    }

    // Check if the user already exists
    let oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: 'This email is already registered' });
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // Create a new user
    let newUser = new User({
      username: name,
      userEmail: email,
      userPass: hashedPass,
    });

    // Save the user to the database
    let savedUser = await newUser.save();

    // Respond with success
    res.status(201).json({
      message: 'User has been registered successfully',
      data: savedUser,
    });

  } catch (er) {
    console.log(er.message ? er.message : er);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  register
};
