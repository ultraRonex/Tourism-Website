// messageController.js

const Message = require('../models/message'); // Import the message model

// Send a message
exports.sendMessage = (req, res) => {
  const { senderId, receiverId, senderType, message } = req.body;

  const newMessage = new Message({
    senderId,
    receiverId,
    senderType,
    message,
  });

  newMessage
    .save()
    .then((savedMessage) => res.status(200).json(savedMessage))
    .catch((err) => res.status(500).json({ error: 'Failed to send message', details: err }));
};

// Get all messages for a guide
exports.getMessagesForGuide = (req, res) => {
    const { guideId } = req.params; // Get guideId from the URL
  
    Message.find({ receiverId: guideId })
      .then((messages) => res.status(200).json(messages))
      .catch((err) => res.status(500).json({ error: 'Failed to fetch messages', details: err }));
  };