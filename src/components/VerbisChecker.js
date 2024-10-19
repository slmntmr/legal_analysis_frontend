'use client'; // Bu bileşenin client-side olduğunu belirtiyoruz

import React, { useState } from 'react';
import axios from 'axios';

const VerbisChecker = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/verbis/check', { params: { url } });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Web sitesi URL'sini girin"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleCheck}>Kontrol Et</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default VerbisChecker;
