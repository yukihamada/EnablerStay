import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewMessage = () => {
  const [receiverId, setReceiverId] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ receiverId, content }),
    });

    if (res.ok) {
      router.push('/message');
    } else {
      console.error('Failed to send message');
    }
  };

  return (
    <div>
      <h1>New Message</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Receiver ID"
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default NewMessage;

