import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { users } from './users.js';

// Use an environment variable for production
const JWT_SECRET = 'your_jwt_secret_key';

export async function authenticate(email, password) {
  const user = users.find(u => u.email === email);
  if (!user) return null;
  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;
  // Omit password before returning user
  const { password: _pw, ...rest } = user;
  return rest;
}

export function signJwt(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
}

// Middleware: require valid JWT and attach user to req
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Missing token' });
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Middleware scaffold for role-based endpoints
export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Forbidden: insufficient role' });
    }
    next();
  };
}