// const express = require("express");
// const router = express.Router();
// const Message = require("../models/Message");

// // Guide replies to a message
// router.post("/reply", async (req, res) => {
//   const { senderId, receiverId, message } = req.body;

//   if (!senderId || !receiverId || !message) {
//     return res.status(400).json({ error: "Missing required fields." });
//   }

//   try {
//     const newReply = new Message({
//       senderId,          // guide's ID
//       receiverId,        // visitor's ID
//       senderType: "guide",
//       message,
//     });

//     await newReply.save();
//     res.status(201).json(newReply);
//   } catch (err) {
//     console.error("Error saving guide reply:", err);
//     res.status(500).json({ error: "Failed to send reply." });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
