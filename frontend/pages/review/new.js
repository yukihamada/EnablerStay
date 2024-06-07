import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewReview = () => {
  const [propertyId, setPropertyId] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ propertyId, rating, comment }),
    });

    if (res.ok) {
      router.push(\`/review/${propertyId}\`);
    } else {
      console.error('Failed to create review');
    }
  };

  return (
    <div>
      <h1>New Review</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Property ID"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Create Review</button>
      </form>
    </div>
  );
};

export default NewReview;

