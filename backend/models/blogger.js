const mongoose = require("mongoose");

const BloggerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Blogger", BloggerSchema);
