import express from 'express';
import { authenticate, signJwt } from '../auth.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  const user = await authenticate(email, password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const token = signJwt(user);
  res.json({ token, role: user.role });
});

export default router;