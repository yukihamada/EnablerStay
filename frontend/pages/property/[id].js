import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale, params, req }) {
  const { id } = params;
  const res = await fetch(\`https://api.enabler.cc/property/\${id}\`, {
    headers: {
      'Authorization': \`Bearer \${req.cookies.token}\`
    }
  });
    }
  });
  const data = await res.json();

  return {
    props: {
      property: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const PropertyDetail = ({ property }) => {
  const { t } = useTranslation('common');

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>{property.address}</p>
      <p>{t('price_per_night')}: ${property.price}</p>
      <p>{t('max_guests')}: {property.maxGuests}</p>
    </div>
  );
};

export default PropertyDetail;

