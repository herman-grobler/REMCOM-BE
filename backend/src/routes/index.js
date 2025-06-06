import { Router } from 'express';
import authRouter from './auth.js';
// import { authenticateToken, requireRole } from '../auth.js';

const router = Router();

router.use(authRouter);

// Example protected route scaffold:
// router.get('/admin', authenticateToken, requireRole('admin'), (req, res) => {
//   res.json({ message: 'Welcome admin!' });
// });

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

export default router;