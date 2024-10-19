import { useEffect, useState } from 'react';
import styles from '../styles/page.module.css';

const WebCrawler = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [isCrawling, setIsCrawling] = useState(false);
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe

  const handleCrawl = async () => {
    if (url.trim() === '') return;
    setIsCrawling(true);
    setResult(null); // Önceki sonucu temizle
    try {
      const response = await fetch(`http://localhost:8080/api/crawler/crawl?url=${encodeURIComponent(url)}`, {
        headers: {
          "Accept-Language": language, // Dil parametresi
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP hatası! Durum: ${response.status}`);
      }

      const data = await response.json();
      setResult(data || {});
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setIsCrawling(false);
    }
  };

  // Dinamik çeviri fonksiyonu
  const translateStatus = (status) => {
    if (language === 'en') {
      if (status === 'Hukuka Uygun') return 'Legally Compliant';
      if (status === 'Metin Detaylı Düzenlenmelidir') return 'Text Needs Detailed Revision';
      if (status === 'Metniniz Hukuka Uygun Değil') return 'Your Text is Not Legally Compliant';
    }
    return status; // Eğer Türkçe ise orijinal durumu döndür
  };

  return (
    <div>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder={language === 'tr' ? "Web sitesi URL'sini girin" : "Enter website URL"}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.formInput}
        />
        <button
          onClick={handleCrawl}
          className={`${styles.formButton} ${isCrawling ? 'taranıyor' : ''}`}
          disabled={isCrawling}
        >
          {isCrawling ? (language === 'tr' ? 'Taranıyor...' : 'Crawling...') : (language === 'tr' ? 'Tara' : 'Crawl')}
        </button>
      </div>

      {/* Dil Seçimi */}
      <div>
        <label htmlFor="language-select">{language === 'tr' ? 'Dil Seçin:' : 'Select Language:'}</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Hata Mesajı veya Sonuç */}
      {result && (
        <div>
          {result.error ? (
            <div className={styles.errorMessage}>
              <p>{result.error}</p>
            </div>
          ) : (
            <div className={styles.card}>
              <h4>{language === 'tr' ? 'Analiz Sonuçları' : 'Analysis Results'}</h4>
              <p><strong>{language === 'tr' ? 'Skor' : 'Score'}:</strong> {result.score || (language === 'tr' ? 'Bilgi yok' : 'No data')}</p>
              <p><strong>{language === 'tr' ? 'Durum' : 'Status'}:</strong> {translateStatus(result.durum) || (language === 'tr' ? 'Bilgi yok' : 'No data')}</p>
            </div>
          )}

          {result.missingKeywords && Object.entries(result.missingKeywords).map(([title, keywords], index) => (
            <div key={index} className={styles.card}>
              <h4 className={keywords.length === 0 ? styles.success : styles.negative}>
                {title}
              </h4>
              <p className={styles.shortSuggestion}>
                {keywords.length === 0
                  ? (language === 'tr' ? 'Eksik kelime yok.' : 'No missing keywords.')
                  : keywords.join(', ')}
              </p>
            </div>
          ))}

          {result.suggestions && (
            <div className={styles.card}>
              <h4 className={styles.success}>{language === 'tr' ? 'aiAnalysis - Öneri' : 'aiAnalysis - Suggestion'}</h4>
              <p>{result.suggestions.aiAnalysis.replace(/[*]/g, '') || (language === 'tr' ? 'Öneri bulunamadı.' : 'No suggestions available.')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WebCrawler;
