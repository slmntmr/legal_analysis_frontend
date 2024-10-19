'use client'; // Bu sayfanın client-side'da çalıştığını belirtelim

import React from 'react';
import WebCrawler from '../components/WebCrawler'; // Web Tarayıcı bileşeni
import VerbisChecker from '../components/VerbisChecker'; // Verbis Kontrol bileşeni
import styles from '../styles/page.module.css'; // Sayfa için stil dosyası

const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Web Tarayıcı Bölümü */}
      <section className={styles.section}>
        <h1>Web Tarayıcı</h1>
        <WebCrawler />
      </section>

      {/* Verbis Kontrol Bölümü */}
      <section className={styles.section}>
        <h1>Etbis Kontrol</h1>

         <VerbisChecker />
         


      </section>
    </div>
  );
};

export default HomePage;
