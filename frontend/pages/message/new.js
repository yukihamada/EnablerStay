import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const NewMessage = () => {
  const { t } = useTranslation('common');
  const [receiverId, setReceiverId] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ receiverId, content }),
    });

    if (res.ok) {
      router.push('/message');
    } else {
      console.error('Failed to send message');
    }
  };

  return (
    <div>
      <h1>{t('new_message')}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t('receiver_id')}
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
        />
        <textarea
          placeholder={t('message')}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">{t('send_message')}</button>
      </form>
    </div>
  );
};

export default NewMessage;
