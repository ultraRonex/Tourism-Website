const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  visitorId: String,
  guideId: String,
  messages: [
    {
      sender: String, // 'visitor' or 'guide'
      text: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Chat', chatSchema);
