import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewProperty = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [maxGuests, setMaxGuests] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/property', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, address, price, maxGuests }),
    });

    if (res.ok) {
      router.push('/property');
    } else {
      console.error('Failed to create property');
    }
  };

  return (
    <div>
      <h1>New Property</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price per night"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max guests"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
        />
        <button type="submit">Create Property</button>
      </form>
    </div>
  );
};

export default NewProperty;

