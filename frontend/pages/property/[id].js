import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PropertyDetail = () => {
  const [property, setProperty] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await fetch(\`/api/property/${id}\`);
      const data = await res.json();
      setProperty(data);
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>{property.address}</p>
      <p>Price per night: ${property.price}</p>
      <p>Max guests: {property.maxGuests}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(\`https://api.enabler.cc/property/${id}\`, {
    headers: {
      'Authorization': \`Bearer ${context.req.cookies.token}\`
    }
  });
  const data = await res.json();

  return {
    props: {
      property: data
    }
  };
};

export default PropertyDetail;

