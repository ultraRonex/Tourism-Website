// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');



// // Register new user
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ error: "User already exists" });

//     const newUser = new User({ name, email, password, role });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully", user: newUser });
//   } catch (err) {
//     res.status(500).json({ error: "Server error", details: err.message });
//   }
// });

// // Login user
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   console.log("Received login request:", email, password); // ✅ Add this

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("User not found");
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     const isMatch = password === user.password; // Only for plain text
//     if (!isMatch) {
//       console.log("Password mismatch");
//       return res.status(400).json({ error: "Invalid email or password" });
//     }
//     if (!user.role || !['visitor', 'guide', 'blogger'].includes(user.role)) {
//       return res.status(400).json({ error: "Invalid user role" });
//     }
    

//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         name: user.name,
//         email: user.email,
//         role: user.role // This will be used on frontend
//       }
//     });
    
//   } catch (err) {
//     console.error("Server error during login:", err); // ✅ Logs real error
//     res.status(500).json({ error: "Server error", details: err.message });
//   }
// });


  
  
// module.exports = router;

// //userroutes.js
// const express = require("express");
// const router = express.Router();
// const userController = require("../controller/userController"); // Import userController
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const multer = require("multer");



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Ensure this folder exists
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });
// const upload = multer({ storage });


// // ✅ Register route using controller logic (supports guide verification via image)
// router.post("/register", userController.registerUser);

// // ✅ Login route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   console.log("Received login request:", email, password);

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("User not found");
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     // Compare hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log("Password mismatch");
//       return res.status(400).json({ error: "Invalid email or password" });
//     }

//     // Check role validity
//     if (!user.role || !['visitor', 'guide', 'blogger'].includes(user.role)) {
//       return res.status(400).json({ error: "Invalid user role" });
//     }

//     // Create JWT token
//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         verified: user.verified,
//         profileImage: user.profileImage,
//       },
//     });

//   } catch (err) {
//     console.error("Server error during login:", err);
//     res.status(500).json({ error: "Server error", details: err.message });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require('path');
const fs = require('fs');

// Multer storage config for Aadhar upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    // Ensure upload directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Save file with timestamp + original extension
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

// Register route with multer middleware to handle Aadhar card file upload
// 'aadhar' is the field name expected in the multipart form-data
router.post("/register", upload.single('aadhar'), userController.registerUser);

// Login route remains unchanged
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", email, password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password mismatch");
      return res.status(400).json({ error: "Invalid email or password" });
    }

    if (!user.role || !['visitor', 'guide', 'blogger'].includes(user.role)) {
      return res.status(400).json({ error: "Invalid user role" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        verified: user.verified,
        profileImage: user.profileImage,
      },
    });

  } catch (err) {
    console.error("Server error during login:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;
