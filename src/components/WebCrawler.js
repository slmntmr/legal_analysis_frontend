import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/page.module.css'; // CSS stil dosyasını ekliyoruz

const WebCrawler = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleCrawl = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/crawler/crawl', { params: { url } });
      setResult(response.data || {}); // Null kontrolü ile boş veri gelirse boş obje döndürüyoruz
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
        className={styles.formInput}
      />
      <button onClick={handleCrawl} className={styles.formButton}>Tara</button>

      {result && (
        <div>
         

          {/* Analiz Sonuç Kartları */}
          {result.missingKeywords && Object.entries(result.missingKeywords).map(([title, keywords], index) => (
            <div key={index} className={styles.card}>
              <h4 className={keywords.length === 0 ? styles.success : styles.negative}>
                {title}
              </h4>
              <p className={styles.shortSuggestion}>
                {keywords.length === 0 ? 'Eksik kelime yok.' : keywords.join(', ')}
              </p>
            </div>
          ))}

          {/* Öneri Kartı */}
          {/* Öneri Kartı */}
{result.suggestions && (
  <div className={styles.card}> {/* Öneri için aynı kart stilini kullanıyoruz */}
    <h4 className={styles.success}>aiAnalysis - Öneri</h4>
    <p>{result.suggestions.aiAnalysis.replace(/[*]/g, '') || 'Öneri bulunamadı.'}</p> {/* Yıldızları temizliyoruz */}
  </div>
)}



        </div>
      )}
    </div>
  );
};

export default WebCrawler;
