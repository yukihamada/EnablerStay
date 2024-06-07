import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/profile');
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  // サーバーサイドで必要なデータを取得する処理をここに追加
  const res = await fetch('https://api.enabler.cc/profile', {
    headers: {
      'Authorization': \`Bearer ${context.req.cookies.token}\`
    }
  });
  const data = await res.json();

  return {
    props: {
      user: data
    }
  };
};

export default Profile;

