import { useEffect, useState } from 'react';
import styles from '../styles/page.module.css';

const WebCrawler = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [isCrawling, setIsCrawling] = useState(false);
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe
  const [errorMessage, setErrorMessage] = useState(''); // Hata mesajı için state

  // URL'nin geçerli olup olmadığını kontrol eden fonksiyon
  const isValidUrl = (url) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' +
      '((([a-zA-Z0-9_-]+\\.)+[a-zA-Z]{2,})|' +
      'localhost|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)?' +
      '(\\?[;&a-zA-Z0-9()@:%_\\+.~#?&//=]*)?' +
      '(\\#[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)?$',
      'i'
    );
    return urlPattern.test(url);
  };

  const handleCrawl = async () => {
    if (url.trim() === '') {
      setErrorMessage(language === 'tr' ? 'URL alanı boş olamaz!' : 'URL field cannot be empty!');
      return;
    }

    if (!isValidUrl(url)) {
      setErrorMessage(
        language === 'tr'
          ? 'Geçersiz URL formatı! Lütfen https:// veya http:// ile başlayan bir URL girin.'
          : 'Invalid URL format! Please enter a URL that starts with https:// or http://.'
      );
      return;
    }

    setErrorMessage('');
    setIsCrawling(true);
    setResult(null);

    try {
      const response = await fetch(`${process.env.API_URL}/api/crawler/crawl?url=${encodeURIComponent(url)}`, {
        headers: {
          "Accept-Language": language,
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

  const translateStatus = (status) => {
    if (!status) return language === 'tr' ? 'Bilgi yok' : 'No data';
    if (language === 'en') {
      if (status === 'Hukuka Uygun') return 'Legally Compliant';
      if (status === 'Metin Detaylı Düzenlenmelidir') return 'Text Needs Detailed Revision';
      if (status === 'Metniniz Hukuka Uygun Değil') return 'Your Text is Not Legally Compliant';
    }
    return status;
  };

  return (
    <div className={styles.mainContainer}>
      
       <img src="/logo.png" alt="Logo" class="logoImage" />
      <h1>{language === 'tr' ? 'Web Tarayıcı' : 'Web Crawler'}</h1>
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

      {errorMessage && (
        <div className={styles.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      )}

      <div className={styles.languageSelect}>
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

      {result && (
        <div>
          {result.error ? (
            <div className={styles.errorMessage}>
              <p>{result.error}</p>
            </div>
          ) : (
            <div className={styles.analysisCard}>
              <h4>{language === 'tr' ? 'Analiz Sonuçları' : 'Analysis Results'}</h4>
              <p className={styles.score}>
                <strong>{language === 'tr' ? 'Skor' : 'Score'}:</strong> {result.score || (language === 'tr' ? 'Bilgi yok' : 'No data')}
              </p>
              <p className={
                translateStatus(result.durum) === 'Legally Compliant' ? styles.statusLegallyCompliant :
                translateStatus(result.durum) === 'Text Needs Detailed Revision' ? styles.statusNeedsRevision :
                translateStatus(result.durum) === 'Your Text is Not Legally Compliant' ? styles.statusNotCompliant : ''
              }>
                <strong>{language === 'tr' ? 'Durum' : 'Status'}:</strong> {translateStatus(result.durum) || (language === 'tr' ? 'Bilgi yok' : 'No data')}
              </p>
            </div>
          )}

          {result.missingKeywords && Object.entries(result.missingKeywords).map(([title, keywords], index) => (
            <div key={index} className={styles.card}>
              <h4 className={keywords.length === 0 ? styles.success : styles.negative}>
                {title}
              </h4>
              <p className={keywords.length === 0 ? styles.shortSuggestion : styles.missingKeywords}>
                {keywords.length === 0
                  ? (language === 'tr' ? 'Eksik kelime yok.' : 'No missing keywords.')
                  : <><span className={styles.missingKeywordsLabel}>{language === 'tr' ? 'Eksik Kelimeler: ' : 'Missing Keywords: '}</span>{keywords.join(', ')}</>
                }
              </p>
            </div>
          ))}

          {result.suggestions && result.suggestions.aiAnalysis && (
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
