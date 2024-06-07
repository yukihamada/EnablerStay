import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ReservationDetail = () => {
  const [reservation, setReservation] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchReservation = async () => {
      const res = await fetch(\\`/api/reservation/${id}\\`);
      const data = await res.json();
      setReservation(data);
    };

    if (id) {
      fetchReservation();
    }
  }, [id]);

  if (!reservation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Reservation Detail</h1>
      <p>Property ID: {reservation.propertyId}</p>
      <p>Start Date: {reservation.startDate}</p>
      <p>End Date: {reservation.endDate}</p>
      <p>Total Price: ${reservation.totalPrice}</p>

      <button onClick={handleCancel} className="bg-red-500 text-white rounded-full py-2 px-4 mt-4">
        キャンセル
      </button>
    </div>
  );

  async function handleCancel() {
    const res = await fetch(\`/api/reservation/${id}\`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      alert('予約がキャンセルされました');
      router.push('/reservation');
    } else {
      alert('予約のキャンセルに失敗しました');
    }
  }

};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(\\`https://api.enabler.cc/reservation/${id}\\`, {
    headers: {
      'Authorization': \\`Bearer ${context.req.cookies.token}\\`
    }
  });
  const data = await res.json();

  return {
    props: {
      reservation: data
    }
  };
};

export default ReservationDetail;

