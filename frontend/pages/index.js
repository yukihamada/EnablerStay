import React from 'react';

const Home = ({ data }) => {
  return (
    <div>
      <h1>EnablerStayへようこそ</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  // APIからデータを取得する例
  const res = await fetch('https://api.enabler.cc/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;

