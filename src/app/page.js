'use client'; // Bu sayfanın client-side'da çalıştığını belirtelim

import React from 'react';
import WebCrawler from '../components/WebCrawler'; // Web Tarayıcı bileşeni
import VerbisChecker from '../components/VerbisChecker'; // Verbis Kontrol bileşeni
import pageStyles from '../styles/page.module.css'; // Sayfa için stil dosyası
import Metinler from '../components/metinler'; // Metinler bileşeni
import IhlalKategorileri from '../components/ihlaller';
import LogoInfo from '@/components/lojo'; // Logo bileşeni import edildi

const HomePage = () => {
  return (
    <div className={pageStyles.mainContainer}>
      {/* Logo Bölümü */}
      <section className={pageStyles.section}>
        <LogoInfo /> {/* Logo bilgisi burada gösterilecek */}
      </section>

      {/* Web Tarayıcı Bölümü */}
      <section className={pageStyles.section}>
        <h1 className={pageStyles.sectionTitle}></h1>
        <WebCrawler />
      </section>

      {/* Verbis Kontrol Bölümü */}
      <section className={pageStyles.section}>
        <h1 className={pageStyles.sectionTitle}>Etbis Kontrol</h1>
        <VerbisChecker />
      </section>

      {/* Metinler Bölümü */}
      <section className={pageStyles.section}>
        <h1 className={pageStyles.sectionTitle}>Bilgiler</h1>
        <Metinler /> {/* Metinler bileşeni burada */}
      </section>

      {/* KVKK Güncel Kanun ve Cezalar Bölümü */}
      <section className={pageStyles.section}>
        <h1 className={pageStyles.sectionTitle}>KVKK Güncel Kanun ve Cezalar</h1>
        <IhlalKategorileri />
      </section>
    </div>
  );
};

export default HomePage;
