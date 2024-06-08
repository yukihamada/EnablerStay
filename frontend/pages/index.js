import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link component
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale = 'en' }) { // Add fallback locale
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
  const properties = [
    { id: 1, name: '熱海', description: '美しい海と温泉の街', image: '/images/atami.jpg', price: '¥15,000', reason: '温泉と海の絶景が楽しめます', reviews: ['素晴らしい体験でした！', 'また行きたいです。'] },
    { id: 2, name: '京都', description: '歴史と文化の街', image: '/images/kyoto.jpg', price: '¥20,000', reason: '歴史的な観光地がたくさんあります', reviews: ['とても楽しかったです。', '文化に触れることができました。'] },
    { id: 3, name: 'ハワイ', description: '美しいビーチとリゾート', image: '/images/hawaii.jpg', price: '$200', reason: 'ビーチとリゾートでリラックスできます', reviews: ['最高のバケーションでした！', 'ビーチがとても綺麗でした。'] },
    { id: 4, name: '北海道', description: '自然と美食の地', image: '/images/hokkaido.jpg', price: '¥18,000', reason: '自然と美味しい食べ物が楽しめます', reviews: ['食べ物が美味しかったです。', '自然が素晴らしかったです。'] },
  ];



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
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">{t('title')}</h1>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            {t('home')}
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            {t('about')}
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-5">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <div key={property.id} className="border p-4 rounded-lg shadow-md">
              <Image src={property.image} alt={property.name} width={300} height={200} className="rounded-md" />
              <h2 className="text-xl font-bold mt-2">{property.name}</h2>
              <p>{property.description}</p>
              <p className="text-gray-600 mt-1">価格: {property.price}</p>
              <p className="text-gray-600 mt-1">おすすめの理由: {property.reason}</p>
              <div className="mt-2">
                <h3 className="text-lg font-semibold">レビュー:</h3>
                <ul className="list-disc list-inside">
                  {property.reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                  ))}
                </ul>
              </div>
            </div>

          ))}
        </div>
      </main>

    </div>
  );
};

export default Home;
