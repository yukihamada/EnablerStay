import React, { useEffect, useState } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch('/api/property');
      const data = await res.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <a href={\\`/property/${property.id}\\`}>{property.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;

