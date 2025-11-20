import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChatBox.css';

const ChatBox = ({ guide, onClose }) => {
  const [visitorId] = useState("visitor123"); // Replace with auth ID if any
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/messages/chat', {
        params: {
          senderId: visitorId,
          receiverId: guide._id
        }
      });
      setMessages(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const messageData = {
      senderId: visitorId,
      receiverId: guide._id,
      senderType: "visitor",
      message: input
    };

    try {
      await axios.post('http://localhost:5000/api/messages/send', messageData);
      setInput("");
      fetchMessages();
    } catch (err) {
      console.error("Send error:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [guide]);

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <h4>Chat with {guide.name}</h4>
        <button onClick={onClose}>X</button>
      </div>
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-msg ${msg.senderType === "visitor" ? "sent" : "received"}`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
