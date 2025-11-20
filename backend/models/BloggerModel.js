// const mongoose = require("mongoose");

// const BloggerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   bio: { type: String, required: true },
// });

// module.exports = mongoose.model("Blogger", BloggerSchema);


const mongoose = require("mongoose");

const BloggerSchema = new mongoose.Schema({
  name: String,
  email: String,
  bio: String,
  imageUrl: String, // ✅ add this line if not already there
});

module.exports = mongoose.model("Blogger", BloggerSchema);
