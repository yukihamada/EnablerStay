import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale, req }) {
  const res = await fetch('https://api.enabler.cc/property', {
    headers: {
'Authorization': \`Bearer \${req.cookies.token}\`
    }
  });
  const data = await res.json();

  return {
    props: {
      properties: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const PropertyList = ({ properties }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('property')}</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <a href={\\`/property/\${property.id}\\`}>{property.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;

