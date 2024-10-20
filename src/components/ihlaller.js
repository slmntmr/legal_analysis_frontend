import React from 'react';
import styles from '../styles/ihlaller.module.css'; // CSS dosyasını unutmayın

const IhlalKategorileri = () => {
  const ihlaller = [
    {
      id: "IH1",
      ihlalKategorisi: "Veri Güvenliği Yükümlülüklerinin İhlali",
      kvkkMadde: "KVKK Madde 12 & 18/1 (a)",
      kvkkYaptirim: "15.000 TL’den 1.000.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 32 & 83(4)",
      gdprYaptirim: "10.000.000 EUR veya yıllık küresel cironun %2'sine kadar, hangisi daha yüksekse",
    },
    {
      id: "IH2",
      ihlalKategorisi: "Aydınlatma Yükümlülüğünün İhlali",
      kvkkMadde: "KVKK Madde 10 & 18/1 (b)",
      kvkkYaptirim: "5.000 TL’den 100.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 12-14 & 83(4)",
      gdprYaptirim: "10.000.000 EUR veya yıllık küresel cironun %2'sine kadar, hangisi daha yüksekse",
    },
    {
      id: "IH3",
      ihlalKategorisi: "Veri Sorumluları Siciline Kayıt Yükümlülüğünün İhlali",
      kvkkMadde: "KVKK Madde 16 & 18/1 (c)",
      kvkkYaptirim: "20.000 TL’den 1.000.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 30, 83(4)",
      gdprYaptirim: "10.000.000 EUR veya yıllık küresel cironun %2'sine kadar, hangisi daha yüksekse",
    },
    {
      id: "IH4",
      ihlalKategorisi: "Kurul Kararlarının Yerine Getirilmemesi",
      kvkkMadde: "KVKK Madde 15 & 18/1 (ç)",
      kvkkYaptirim: "25.000 TL’den 1.000.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 58(2), 83(5)",
      gdprYaptirim: "20.000.000 EUR veya yıllık küresel cironun %4'üne kadar, hangisi daha yüksekse",
    },
    {
      id: "IH5",
      ihlalKategorisi: "Açık Rıza Almadan Veri İşleme",
      kvkkMadde: "KVKK Madde 5, 6 & 18/1",
      kvkkYaptirim: "15.000 TL’den 1.000.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 6, 7 & 83(5)",
      gdprYaptirim: "20.000.000 EUR veya yıllık küresel cironun %4'üne kadar, hangisi daha yüksekse",
    },
    {
      id: "IH6",
      ihlalKategorisi: "Kişisel Verilerin Yurt Dışına Aktarılması",
      kvkkMadde: "KVKK Madde 9 & 18/1",
      kvkkYaptirim: "15.000 TL’den 1.000.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 44-49 & 83(5)",
      gdprYaptirim: "20.000.000 EUR veya yıllık küresel cironun %4'üne kadar, hangisi daha yüksekse",
    },
    {
      id: "IH7",
      ihlalKategorisi: "Veri İhlalinin Bildirilmemesi",
      kvkkMadde: "KVKK Madde 12 & 18/1",
      kvkkYaptirim: "15.000 TL’den 1.000.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 33, 34 & 83(4)",
      gdprYaptirim: "10.000.000 EUR veya yıllık küresel cironun %2'sine kadar, hangisi daha yüksekse",
    },
    {
      id: "IH8",
      ihlalKategorisi: "Veri Sahiplerinin Haklarının İhlali",
      kvkkMadde: "KVKK Madde 11 & 18/1",
      kvkkYaptirim: "5.000 TL’den 100.000 TL’ye kadar idari para cezası",
      gdprMadde: "GDPR Madde 12-23 & 83(5)",
      gdprYaptirim: "20.000.000 EUR veya yıllık küresel cironun %4'üne kadar, hangisi daha yüksekse",
    },
  ];

  return (
    <div className={styles.container}>
      {ihlaller.map((ihlal) => (
        <div key={ihlal.id} className={styles.card}>
          <h3 className={styles.ihlalKategorisi}>{ihlal.ihlalKategorisi}</h3>
          <p className={styles.localParagraph}><strong>KVKK Maddesi:</strong> {ihlal.kvkkMadde}</p>
          <p className={styles.localParagraph}><strong>KVKK Yaptırımı:</strong> {ihlal.kvkkYaptirim}</p>
          <p className={styles.localParagraph}><strong>GDPR Maddesi:</strong> {ihlal.gdprMadde}</p>
          <p className={styles.localParagraph}><strong>GDPR Yaptırımı:</strong> {ihlal.gdprYaptirim}</p>
        </div>
      ))}
    </div>
  );
};

export default IhlalKategorileri;
