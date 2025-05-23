import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>Frontend (Vite + React)</h1>
      <p>API says: {message}</p>
    </div>
  );
}

export default App;
