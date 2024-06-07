import React, { useEffect, useState } from 'react';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/message');
      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>From: {message.senderId}</p>
            <p>To: {message.receiverId}</p>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;

