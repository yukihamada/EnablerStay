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

export const getServerSideProps = async (context) => {
  // サーバーサイドで必要なデータを取得する処理をここに追加
  const res = await fetch('https://api.enabler.cc/reservation', {
    headers: {
      'Authorization': \`Bearer ${context.req.cookies.token}\`
    }
  });
  const data = await res.json();

  return {
    props: {
      reservations: data
    }
  };
};

export default ReservationList;

