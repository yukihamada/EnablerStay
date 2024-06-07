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

export default PropertyDetail;

