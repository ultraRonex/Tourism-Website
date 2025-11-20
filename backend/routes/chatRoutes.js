const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// Visitor sends message
router.post('/send', async (req, res) => {
  const { visitorId, guideId, text } = req.body;

  let chat = await Chat.findOne({ visitorId, guideId });
  if (!chat) {
    chat = new Chat({ visitorId, guideId, messages: [] });
  }

  chat.messages.push({ sender: 'visitor', text });
  await chat.save();

  res.json(chat);
});

// Guide sends reply
router.post('/reply', async (req, res) => {
  const { visitorId, guideId, text } = req.body;

  const chat = await Chat.findOne({ visitorId, guideId });
  if (!chat) return res.status(404).json({ error: 'Chat not found' });

  chat.messages.push({ sender: 'guide', text });
  await chat.save();

  res.json(chat);
});

// Fetch chat messages
router.get('/:visitorId/:guideId', async (req, res) => {
  const { visitorId, guideId } = req.params;
  const chat = await Chat.findOne({ visitorId, guideId });
  res.json(chat || { messages: [] });
});

module.exports = router;
