import bcrypt from 'bcrypt';
import { users } from '../src/users.js';
import { authenticate } from '../src/auth.js';

describe('Password verification', () => {
  it('correct password passes bcrypt.compare', async () => {
    const user = users[0];
    const match = await bcrypt.compare('adminpass', user.password);
    expect(match).toBe(true);
  });

  it('wrong password fails bcrypt.compare', async () => {
    const user = users[0];
    const match = await bcrypt.compare('wrongpass', user.password);
    expect(match).toBe(false);
  });

  it('authenticate returns user for valid credentials', async () => {
    const user = await authenticate('admin@example.com', 'adminpass');
    expect(user).toMatchObject({ email: 'admin@example.com', role: 'admin' });
  });

  it('authenticate returns null for invalid credentials', async () => {
    const user = await authenticate('admin@example.com', 'wrongpass');
    expect(user).toBeNull();
  });

  it('authenticate returns null for unknown user', async () => {
    const user = await authenticate('nouser@example.com', 'any');
    expect(user).toBeNull();
  });
});