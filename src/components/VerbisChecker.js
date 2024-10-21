'use client'; // Bu bileşenin client-side olduğunu belirtiyoruz deneme yapıyoruz

import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/verbischecker.module.css'; // CSS dosyanızı eklemeyi unutmayın

const VerbisChecker = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheck = async () => {
    if (url.trim() === '') {
      setErrorMessage('Lütfen geçerli bir URL giriniz.');
      return;
    }

    setErrorMessage('');
    try {
      const response = await axios.get('http://localhost:8080/api/verbis/check', { params: { url } });
      setResult(response.data);
    } catch (error) {
      setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyiniz.');
      console.error(error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Web sitesi URL'sini girin"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.formInput}
        />
        <button onClick={handleCheck} className={styles.formButton}>
          Kontrol Et
        </button>
      </div>

      {/* Hata Mesajı */}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

      {/* Sonuç kartı */}
      {result && (
        <div className={styles.resultCard}>
          <h4>Etbis Kontrol Sonucu</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default VerbisChecker;
