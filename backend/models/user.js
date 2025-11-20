// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: String,
// });

// module.exports = mongoose.model("User", userSchema);


// // 📄 models/User.js
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: String,
//   profileImage: String, // for base64 webcam image
// aadharCardPath: String, // for Aadhar upload
//   verified: {
//     type: Boolean,
//     default: function () {
//       return this.role !== 'guide'; // Visitors/bloggers are auto-verified
//     },
//   },
//   profileImage: String, // Path to the captured guide image
// });

// module.exports = mongoose.models.User || mongoose.model("User", userSchema);



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
  profileImage: String, // base64 webcam image for guide
  aadharCardPath: String, // file path to uploaded Aadhar card
  verified: {
    type: Boolean,
    default: function () {
      return this.role !== 'guide'; // visitors/bloggers auto-verified
    },
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
