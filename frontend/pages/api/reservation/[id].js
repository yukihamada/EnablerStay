
import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { id } = req.query;

  if (req.method === 'GET') {
    // 予約情報を取得
    const reservation = await getReservation(id);
    return res.status(200).json(reservation);
  } else if (req.method === 'DELETE') {
    // 予約をキャンセル
    const result = await cancelReservation(id);
    return res.status(200).json({ message: 'Reservation cancelled' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};

async function getReservation(id) {
  // ここに予約情報を取得するロジックを追加
  return {
    id: id,
    propertyId: 'dummy_property_id',
    startDate: '2023-01-01',
    endDate: '2023-01-05',
    totalPrice: 50000,
    status: 'confirmed',
  };
}

async function cancelReservation(id) {
  // ここに予約をキャンセルするロジックを追加
  return true;
}

