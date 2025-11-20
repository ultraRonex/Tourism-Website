import { useState, useEffect } from 'react';
import axios from 'axios';
import './chat.css';

function VisitorChatBox({ visitorId, guideId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const fetchMessages = async () => {
    const res = await axios.get(`http://localhost:5000/api/chat/${visitorId}/${guideId}`);
    setMessages(res.data?.messages || []);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSend = async () => {
    await axios.post('http://localhost:5000/api/chat/send', { visitorId, guideId, text });
    setText('');
    fetchMessages();
  };

  return (
    <div className="chat-box">
      <h3>Chat with Guide</h3>
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === 'visitor' ? 'right' : 'left' }}>
            <p><b>{m.sender}</b>: {m.text}</p>
          </div>
        ))}
      </div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default VisitorChatBox;
