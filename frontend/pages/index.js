import React from 'react';
import Image from 'next/image';

const Home = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">EnablerStay</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="検索..."
            className="border rounded-full py-2 px-4 w-64"
          />
          <button className="bg-blue-500 text-white rounded-full py-2 px-4">
            検索
          </button>
        </div>
      </header>
      <main className="flex-grow p-5 bg-gray-100">
        <h2 className="text-3xl font-bold mb-5">おすすめ物件</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-lg">
              <Image src={item.image} alt={item.name} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold mt-2">{item.price}円/泊</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="p-5 bg-white shadow-md text-center">
        <p className="text-gray-600">© 2023 EnablerStay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export async function getServerSideProps() {
  // ダミーデータを使用
  const data = [
    {
      image: 'https://source.unsplash.com/random/300x200?house1',
      name: '物件1',
      description: '素晴らしい物件1の説明',
      price: 10000,
    },
    {
      image: 'https://source.unsplash.com/random/300x200?house2',
      name: '物件2',
      description: '素晴らしい物件2の説明',
      price: 12000,
    },
    {
      image: 'https://source.unsplash.com/random/300x200?house3',
      name: '物件3',
      description: '素晴らしい物件3の説明',
      price: 15000,
    },
    {
      image: 'https://source.unsplash.com/random/300x200?house4',
      name: '物件4',
      description: '素晴らしい物件4の説明',
      price: 18000,
    },
    {
      image: 'https://source.unsplash.com/random/300x200?house5',
      name: '物件5',
      description: '素晴らしい物件5の説明',
      price: 20000,
    },
    {
      image: 'https://source.unsplash.com/random/300x200?house6',
      name: '物件6',
      description: '素晴らしい物件6の説明',
      price: 22000,
    },
  ];

  return {
    props: {
      data,
    },
  };
}

export default Home;

