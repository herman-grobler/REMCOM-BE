import { render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Hello from backend!' })
  })
);

test('renders hello message from API', async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText(/Hello from backend!/i)).toBeInTheDocument());
});
