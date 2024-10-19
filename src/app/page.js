'use client'; // Bu sayfanın client-side'da çalıştığını belirtelim

import React from 'react';
import WebCrawler from '../components/WebCrawler'; // Web Tarayıcı bileşeni
import VerbisChecker from '../components/VerbisChecker'; // Verbis Kontrol bileşeni
import pageStyles from '../styles/page.module.css'; // Sayfa için stil dosyası
import metinlerStyles from '../styles/metinler.module.css'; // Metinler için stil dosyası
import Metinler from '../components/metinler'; // Metinler bileşeni

const HomePage = () => {
  return (
    <div className={pageStyles.mainContainer}>
      {/* Web Tarayıcı Bölümü */}
      <section className={pageStyles.section}>
        <h1>Web Tarayıcı</h1>
        <WebCrawler />
      </section>

      {/* Verbis Kontrol Bölümü */}
      <section className={pageStyles.section}>
        <h1>Etbis Kontrol</h1>
        <VerbisChecker />
      </section>

      <section className={pageStyles.section}>
        <h1>Bilgiler</h1>
        <Metinler /> {/* Metinler bileşeni burada */}
      </section>
    </div>
  );
};

export default HomePage;
