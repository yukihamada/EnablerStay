import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Profile = ({ initialEmail }) => {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState(initialEmail || '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push('/profile');
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Failed to log in');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Failed to log in:', err);
    }
  };

  return (
    <div>
      <h1>{t('login')}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">{t('login')}</button>
      </form>
    </div>
  );
};

export default Profile;
