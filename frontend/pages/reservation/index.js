import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {
  const res = await fetch('https://api.enabler.cc/reservation', {
    headers: {
'Authorization': \\`Bearer \${context.req.cookies.token}\\`
    }
  });
  const data = await res.json();

  return {
    props: {
      reservations: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const ReservationList = ({ reservations }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('reservation')}</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <a href={\\`/reservation/\${reservation.id}\\`}>{t('reservation')} {reservation.id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;

