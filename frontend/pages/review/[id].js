import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ReviewDetail = () => {
  const [review, setReview] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchReview = async () => {
      const res = await fetch(\\`/api/review/${id}\\`);
      const data = await res.json();
      setReview(data);
    };

    if (id) {
      fetchReview();
    }
  }, [id]);

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Review Detail</h1>
      <p>Property ID: {review.propertyId}</p>
      <p>Rating: {review.rating}</p>
      <p>Comment: {review.comment}</p>
    </div>
  );
};

export default ReviewDetail;

