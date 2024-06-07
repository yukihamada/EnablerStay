import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // ユーザー情報をデータベースから取得（ここでは仮のデータベースとしてファイルから取得）
    const fs = require('fs');
    const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    const user = users.find(user => user.email === email);

    if (user && await compare(password, user.password)) {
      // JWTトークンを生成
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

