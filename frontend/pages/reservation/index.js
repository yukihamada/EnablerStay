import React, { useEffect, useState } from 'react';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const res = await fetch('/api/reservation');
      const data = await res.json();
      setReservations(data);
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <a href={\\`/reservation/${reservation.id}\\`}>Reservation {reservation.id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;

