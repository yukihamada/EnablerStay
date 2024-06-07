import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps(context) {
  const { locale } = context;
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
      props: {
        data,
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  }
}

const Home = ({ data }) => {
  const { t } = useTranslation('common');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">{t('title')}</h1>
        </div>
        <nav className="flex space-x-4">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-900">{t('home')}</a>
          </Link>
          <a href="/about" className="text-gray-600 hover:text-gray-900">
            {t('about')}
          </a>
        </nav>
      </header>
      <main className="flex-grow p-5">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
