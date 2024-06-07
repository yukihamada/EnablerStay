import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const text = await res.text();
    console.log('API Response:', text);

    const logPath = path.join(process.cwd(), 'frontend', 'api_response.log');
    fs.writeFileSync(logPath, text);
    const data = JSON.parse(text);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}

const Home = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">EnablerStay</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </header>
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full max-w-md mt-5"
        />
      </header>
      <main className="flex-grow p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item) => (
            <div key={item.id} className="border p-5 rounded-md shadow-md">
              <Image src="/property.jpg" alt={item.title} width={300} height={200} className="rounded-md" />
              <h2 className="text-xl font-bold mt-2">{item.title}</h2>
              <p className="text-gray-600">{item.body}</p>
              <button className="mt-2 p-2 bg-blue-500 text-white rounded-md">View Details</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;