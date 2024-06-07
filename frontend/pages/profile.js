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

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      alert('Profile updated successfully');
    } else {
      alert('Failed to update profile');
    }
  }


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

