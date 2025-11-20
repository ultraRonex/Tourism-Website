const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Send a message
router.post('/send', async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();
    res.status(200).json({ success: true, message: "Message sent" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get messages between visitor and guide
router.get('/chat', async (req, res) => {
  const { senderId, receiverId } = req.query;
  try {
    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }
      ]
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all unique chats for a guide
router.get('/inbox/:guideId', async (req, res) => {
  const guideId = req.params.guideId;
  const messages = await Message.find({ receiverId: guideId }).sort({ timestamp: 1 });

  const grouped = {};
  messages.forEach(msg => {
    if (!grouped[msg.senderId]) grouped[msg.senderId] = [];
    grouped[msg.senderId].push(msg);
  });

  res.json(grouped);
});


  // POST /api/messages/:id/reply
router.post('/:id/reply', async (req, res) => {
  const { id } = req.params;
  const { reply } = req.body;

  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { reply: reply, replyTimestamp: Date.now() },
      { new: true }
    );
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send reply' });
  }
});

  

module.exports = router;
