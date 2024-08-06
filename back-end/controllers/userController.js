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

let login = async (req,res) => {
  try{
    const {email, password} = req.body

    if(!email || !password) {
      return res.status(400).json({
        message : "All Fields Are Required To Be Filled"
      })
    }

    const user = await User.findOne({email})

    if (!user) {
      return res.status(400).json({
        message : "invalid email or password"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({
        message : "invalid email or password"
      })
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Logged in successfully', token });

  } catch(er) {
    console.log(er.message ? er.message : er)
    res.status(400).json({
      message : "Failure",
      data : er.message ? er.message : er
    })
  }


}

module.exports = {
  register,
  login
};
