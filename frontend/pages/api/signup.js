import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    // パスワードをハッシュ化
    const hashedPassword = await hash(password, 10);

    // ユーザー情報をデータベースに保存（ここでは仮のデータベースとしてファイルに保存）
    const fs = require('fs');
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    users.push({ username, email, password: hashedPassword });
    fs.writeFileSync('users.json', JSON.stringify(users));

    res.status(201).json({ message: 'User created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

