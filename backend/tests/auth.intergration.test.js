import request from 'supertest';
import app from '../src/app.js';

describe('POST /api/login', () => {
  it('returns JWT and role for correct credentials', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'admin@example.com', password: 'adminpass' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('role', 'admin');
  });

  it('returns 401 for wrong password', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'admin@example.com', password: 'wrongpass' });
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error');
  });

  it('returns 401 for unknown user', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'nouser@example.com', password: 'any' });
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error');
  });

  it('returns 400 if missing email or password', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'admin@example.com' });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});