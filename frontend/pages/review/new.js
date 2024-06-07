import Link from 'next/link';

import { useRouter } from 'next/router';

const NewReview = () => {
  const [propertyId, setPropertyId] = useState('');
  const res = await fetch(\\\\\\\`https://api.enabler.cc/property/\${id}\\\\\\\`, {
    const res = await fetch(\\\\\\\\\`https://api.enabler.cc/reservation/\${id}\\\\\\\\\`, {
  const router = useRouter();

      const res = await fetch(\\\\\\`/api/payment/\${id}\\\\\\`);
    e.preventDefault();
    const res = await fetch('/api/review', {
      method: 'POST',
      const res = await fetch(\\\\\\\\`/api/property/\${id}\\\\\\\\`);
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ propertyId, rating, comment }),
    });

      router.push(\\\\\\`/review/\${propertyId}\\\\\\`);
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

