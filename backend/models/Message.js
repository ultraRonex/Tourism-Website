// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   senderId: String,       // Visitor ID (or name/email if no auth)
//   receiverId: String,     // Guide ID
//   senderType: String,     // 'visitor' or 'guide'
//   message: String,
//   timestamp: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Message', messageSchema);
// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   senderId: String,
//   receiverId: String,
//   senderType: String, // 'visitor' or 'guide'
//   message: String,
//   timestamp: { type: Date, default: Date.now }
// });

// // Prevent OverwriteModelError
// module.exports = mongoose.models.Message || mongoose.model('Message', messageSchema);
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: String,
  receiverId: String,
  senderType: String, // 'visitor' or 'guide'
  message: String,
  timestamp: { type: Date, default: Date.now },
  reply: String,
  replyTimestamp: Date
});

module.exports = mongoose.models.Message || mongoose.model('Message', messageSchema);
