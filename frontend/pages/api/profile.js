
import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { user } = session;

  if (req.method === 'GET') {
    // プロファイル情報を取得
    const profile = await getUserProfile(user.email);
    return res.status(200).json(profile);
  } else if (req.method === 'PUT') {
    // プロファイル情報を更新
    const updatedProfile = await updateUserProfile(user.email, req.body);
    return res.status(200).json(updatedProfile);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};

async function getUserProfile(email) {
  // ここにユーザープロファイルを取得するロジックを追加
  return {
    username: 'dummy_username',
    email: email,
  };
}

async function updateUserProfile(email, data) {
  // ここにユーザープロファイルを更新するロジックを追加
  return {
    username: data.username,
    email: email,
  };
}

