import bcrypt from 'bcrypt';

// Pre-hashed passwords for demonstration (hash of 'adminpass' and 'userpass')
export const users = [
  {
    id: 1,
    email: 'admin@example.com',
    password: '$2b$10$QH0yE0bXk6l7Jk5k7v0OquwY4jO2UoK9HR2FFQ4k8fD9s3pQ6cN5e', // adminpass
    role: 'admin'
  },
  {
    id: 2,
    email: 'user@example.com',
    password: '$2b$10$u8p0DbNn8IPM8wWZ5u8F2u9gQG6YlQwE6o7x2D3Qd1iV9e3K3pU9zG', // userpass
    role: 'user'
  }
];