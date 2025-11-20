

// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password, role, image } = req.body;

//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     if (role === 'guide' && !image) {
//       return res.status(400).json({ error: 'Image is required for guide verification' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       profileImage: image, // <- Store base64 string here
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Error during registration:', err.message);
//     res.status(500).json({ error: 'Registration failed on server', details: err.message });
//   }
// };

// module.exports = {
//   registerUser,
// };


// //usercontroller.js
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password, confirmPassword, role, image } = req.body;
//     const aadhar = req.file;

//     // Validate required fields
//     if (!name || !email || !password || !confirmPassword || !role) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: 'Passwords do not match' });
//     }

//     // Role-specific validations
//     if ((role === 'guide' || role === 'blogger') && !aadhar) {
//       return res.status(400).json({ error: 'Aadhar card is required' });
//     }

//     if (role === 'guide' && !image) {
//       return res.status(400).json({ error: 'Image is required for guide verification' });
//     }

//     // Check for existing user
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already registered' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user object
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       profileImage: image || null, // webcam image for guide, optional for others
//       aadharCardPath: aadhar ? aadhar.path : null // store file path
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Error during registration:', err.message);
//     res.status(500).json({ error: 'Registration failed on server', details: err.message });
//   }
// };

// module.exports = {
//   registerUser,
// };




const bcrypt = require('bcryptjs');
const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    // req.body now contains text fields; req.file contains uploaded aadhar file
    const { name, email, password, confirmPassword, role, image } = req.body;
    const aadhar = req.file;

    // Validation
    if (!name || !email || !password || !confirmPassword || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // For guide and blogger, aadhar card file upload required
    if ((role === 'guide' || role === 'blogger') && !aadhar) {
      return res.status(400).json({ error: 'Aadhar card is required' });
    }

    // For guide, webcam image base64 is required
    if (role === 'guide' && !image) {
      return res.status(400).json({ error: 'Image is required for guide verification' });
    }

    // Check existing user by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profileImage: image || null, // base64 webcam image for guide, or null
      aadharCardPath: aadhar ? aadhar.path : null // path to uploaded file, or null
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('Error during registration:', err.message);
    res.status(500).json({ error: 'Registration failed on server', details: err.message });
  }
};

module.exports = {
  registerUser,
};
