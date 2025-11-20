// const mongoose = require("mongoose");

// const guideSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   experience: { type: String, required: true },
//   languages: { type: String, required: true },
//   location: { type: String, required: true },
//   contact: { type: String, required: true },
//   imageUrl: { type: String, required: true },
// });

// module.exports = mongoose.model("Guide", guideSchema);
const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  name: String,
  experience: String,
  languages: String,
  location: String,
  contact: String,
  imageUrl: String,
});

module.exports = mongoose.model("Guide", guideSchema);
