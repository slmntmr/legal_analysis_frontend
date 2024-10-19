import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/page.module.css';

const WebCrawler = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [isCrawling, setIsCrawling] = useState(false);

  // Tarama fonksiyonu
  const handleCrawl = async () => {
    if (url.trim() === '') return; // Boş URL kontrolü
    setIsCrawling(true);
    try {
      const response = await axios.get('http://localhost:8080/api/crawler/crawl', { params: { url } });
      setResult(response.data || {});
    } catch (error) {
      console.error(error);
    } finally {
      setIsCrawling(false);
    }
  };

  // Enter tuşuna basıldığında tetiklenecek fonksiyon
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCrawl();
    }
  };

  useEffect(() => {
    // Burada herhangi bir DOM manipülasyonu yapılacaksa, bileşen tamamen yüklendikten sonra yapılır
    console.log('Bileşen yüklendi');
  }, []); // Bu, bileşenin yalnızca bir kez yüklendiğinde çalışmasını sağlar.

  return (
    <div>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Web sitesi URL'sini girin"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.formInput}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleCrawl}
          className={`${styles.formButton} ${isCrawling ? 'taranıyor' : ''}`}
          disabled={isCrawling}
        >
          {isCrawling ? 'Taranıyor...' : 'Tara'}
        </button>
      </div>

      {result && (
        <div>
          {/* Skor ve Durum Kartı */}
          <div className={styles.card}>
            <h4>Analiz Sonuçları</h4>
            <p><strong>Score:</strong> {result.score || 'Bilgi yok'}</p>
            <p><strong>Durum:</strong> {result.durum || 'Bilgi yok'}</p>
          </div>

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
          {result.suggestions && (
            <div className={styles.card}>
              <h4 className={styles.success}>aiAnalysis - Öneri</h4>
              <p>{result.suggestions.aiAnalysis.replace(/[*]/g, '') || 'Öneri bulunamadı.'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WebCrawler;
