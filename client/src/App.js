import React from 'react';  // 👈 Yeh line zaroor honi chahiye
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching backend data:', error);
      });
  }, []);

  return (
    <div>
      <h1>SAIF OS - Frontend Running!</h1>
      <h2>Backend Message:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;