import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewReservation = () => {
  const [propertyId, setPropertyId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ propertyId, startDate, endDate, totalPrice }),
    });

    if (res.ok) {
      router.push('/reservation');
    } else {
      console.error('Failed to create reservation');
    }
  };

  return (
    <div>
      <h1>New Reservation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Property ID"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Price"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default NewReservation;

