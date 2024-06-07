import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale, params, req }) {
  const { id } = params;
  try {
    const res = await fetch(\\`https://api.enabler.cc/reservation/\${id}\\`, {
      headers: {
        'Authorization': \\`Bearer \${req.cookies.token}\\`
      }
    });
      }
    });
    const data = await res.json();

    return {
      props: {
        reservation: data,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        reservation: null,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }
}

const ReservationDetail = ({ reservation }) => {
  const { t } = useTranslation('common');

  if (!reservation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{t('reservation')} Detail</h1>
      <p>Property ID: {reservation.propertyId}</p>
      <p>Start Date: {reservation.startDate}</p>
      <p>End Date: {reservation.endDate}</p>
      <p>Total Price: ${reservation.totalPrice}</p>

      <button onClick={handleCancel} className="bg-red-500 text-white rounded-full py-2 px-4 mt-4">
        {t('cancel')}
      </button>
    </div>
  );

  async function handleCancel() {
    const res = await fetch(\`/api/reservation/${reservation.id}\`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      alert(t('reservation_cancelled'));
      router.push('/reservation');
    } else {
      alert(t('reservation_cancel_failed'));
    }
  }
};

export default ReservationDetail;

