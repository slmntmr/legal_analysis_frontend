'use client'; // Client component olarak işaretleme

import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/page.module.css'; // Stil dosyasını içeri aktarıyoruz

const WebCrawler = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleCrawl = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/crawler/crawl', { params: { url } });
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
        className={styles.formInput} // Stil sınıfını uyguluyoruz
      />
      <button onClick={handleCrawl} className={styles.formButton}>Tara</button>

      {result && (
        <div className={styles.result}>
          <h3>Sonuç</h3>
          <p><strong>Puan:</strong> {result.score}</p>
          <p><strong>Durum:</strong> {result.durum}</p>
          <p><strong>Not:</strong> {result.not}</p>

          <h4>Eksik Anahtar Kelimeler</h4>
          {Object.keys(result.missingKeywords).length === 0 ? (
            <p>Eksik anahtar kelime yok.</p>
          ) : (
            Object.entries(result.missingKeywords).map(([category, keywords]) => (
              <div key={category}>
                <h5>{category}</h5>
                <p>{keywords.join(', ')}</p>
              </div>
            ))
          )}

          <h4>Öneri</h4>
          <p>{result.suggestions?.aiAnalysis || 'Öneri mevcut değil.'}</p>
        </div>
      )}
    </div>
  );
};

export default WebCrawler;
