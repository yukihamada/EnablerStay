import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale, req }) {
  const res = await fetch('https://api.enabler.cc/message', {
    headers: {
'Authorization': \`Bearer \${req.cookies.token}\`
    }
  });
  const data = await res.json();

  return {
    props: {
      messages: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const MessageList = ({ messages }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('message')}</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{t('from')}: {message.senderId}</p>
            <p>{t('to')}: {message.receiverId}</p>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;

