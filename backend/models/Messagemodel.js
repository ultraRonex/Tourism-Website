const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  visitorName: { type: String, required: true },
  guideId: { type: String }, // Optional: store guide ID if needed
  message: { type: String, required: true },
  reply: { type: String },   // Add this field for guide reply
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);
