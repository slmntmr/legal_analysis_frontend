import React from 'react';
import styles from '../styles/metinler.module.css'; // CSS dosyanızı eklemeyi unutmayın

const Metinler = () => {
  // metinler.js
  const sozlesmeler = [
    {
      id: "ET1",
      title: "TİCARİ ELEKTRONİK İLETİ ONAY METNİ",
      type: "E-Ticaret",
      status: "1-Tamamlandı",
      bitelyInfo: "Ret bildirimi geldiğinde üç gün içerisinde kayıttan silinmeli ve mailing durdurulmalıdır. Mail atarken kılavuzdaki şablonlar kullanılmalıdır.",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "BITELY tarafından sunulan hizmet ve fırsatlar ile ilgili, Ticari Elektronik İleti Onam Metni (Link) kapsamında yukarıda paylaşmış olduğum iletişim kanalı/kanalları üzerinden benimle iletişime geçilmesine, iletişim bilgilerimin BITELY tarafından bu amaçla kullanılmasına izin veriyorum. (Link İçindeki Metin En Az 12 Punto Olmalı) (Zorunlu olmamalı) (Onaylandığında Önce Mail Gönderilerek Mail Doğrulanmalı sonrasında İYS sistemine girilmeli) (Ret geldiğinde sistemden maks 3 gün içinde çıkartılmalı) (Mail Gönderimlerinde 6.Madde'de Yer Alan Kılavuz Uygulanmalı)",
      contactSection: "Bültenlerimize abone olarak güncel bilgilerden ve kampanyalardan haberdar olabilirsiniz. Abone Ol butonuna tıklayarak Ticari Elektronik İleti Metni (Link) kapsamında tarafıma ticari elektronik ileti gönderilmesini kabul ediyorum. (Link İçindeki Metin En Az 12 Punto Olmalı) (Zorunlu olmamalı) (Onaylandığında İYS sistemine girilmeli) (Ret geldiğinde sistemden maks 3 gün içinde çıkartılmalı)",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Tercihen Bulunabilir.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET2",
      title: "MESAFELİ HİZMET SATIŞ SÖZLEŞMESİ",
      type: "E-Ticaret",
      status: "0-Devam Ediyor",
      bitelyInfo: "Satış ile birlikte ya üyelik panelinde sözleşmelere ulaşılabilmelidir veya mail ile gönderilmelidir.",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmasına gerek yoktur.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET3",
      title: "ÖN BİLGİLENDİRME FORMU",
      type: "E-Ticaret",
      status: "1-Tamamlandı",
      bitelyInfo: "İlgili ürün veya hizmete dair bilgilendirme yapılmalıdır. Bilgilendirme formu açık ve anlaşılır bir dil ile hazırlanmalı, yanıltıcı bilgi verilmemelidir.",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmasına gerek yoktur.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET4",
      title: "İPTAL, İADE VE CAYMA POLİTİKASI",
      type: "E-Ticaret",
      status: "1-Tamamlandı",
      bitelyInfo: "Müşteriye, ürünün iade şartları ve süresi hakkında bilgi verilmelidir. İade sürecinin nasıl işleyeceği net bir şekilde belirtilmelidir.",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmasına gerek yoktur.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET5",
      title: "İŞLEM REHBERİ",
      type: "E-Ticaret",
      status: "0-Devam Ediyor",
      bitelyInfo: "Müşterilerin, alışveriş sürecinde karşılaşabilecekleri adımlar açık bir şekilde sunulmalıdır. İşlem rehberinin erişilebilir olması önemlidir.",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmasına gerek yoktur.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET6",
      title: "PROMOSYON KOŞULLARI",
      type: "E-Ticaret",
      status: "0-Devam Ediyor",
      bitelyInfo: "Promosyon düzenlendiğinde yerleştirilmesi gerekir veya promosyona ilişkin mail de yer almalıdır.",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmasına gerek yoktur.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET7",
      title: "GİZLİLİK VE GÜVENLİK POLİTİKASI",
      type: "E-Ticaret",
      status: "1-Tamamlandı",
      bitelyInfo: "",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmasına gerek yoktur.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET8",
      title: "TİCARİ ELEKTRONİK İLETİ UYGULAMA KILAVUZU",
      type: "E-Ticaret",
      status: "1-Tamamlandı",
      bitelyInfo: "",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmalıdır.",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET9",
      title: "İYS KAYDI",
      type: "",
      status: "",
      bitelyInfo: "",
      webPageOpening: "Üyeliksiz kayıt olmadığı için bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "",
      newsletterSection: "",
      paymentSection: "",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },
    {
      id: "ET10",
      title: "ETBİS KAYDI",
      type: "",
      status: "",
      bitelyInfo: "",
      webPageOpening: "Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "",
      newsletterSection: "",
      paymentSection: "",
      footerOrLegal: "Bulunmasına gerek yoktur."
    },

    {
        id: "KVKK1",
        title: "Çerez Politikası",
        type: "KVKK",
        status: "0-Devam Ediyor",
        bitelyInfo: "Çerez ayarları teknik olarak yapılabilmelidir.",
        webPageOpening: "İnternet sitemizin işletimi sırasında çerezler kullanılmaktadır. Çerezler hakkında bilgi almak ve ayarlarınızı değiştirebilmek için Çerez Politikasını inceleyiniz. Ayriyeten Ayarlar ve kabul et diye bölüm koymalıyız.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "Bulunmasına gerek yoktur.",
    },
    {
        id: "KVKK2",
        title: "Kişisel Verilerin Korunması ve İşlenmesi Politikası",
        type: "KVKK",
        status: "0-Devam Ediyor",
        bitelyInfo: "",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Yasal Bölümünde Bulunabilir.",
        footerOrLegal: "",
    },
    {
        id: "KVKK3",
        title: "KVKK Aydınlatma Metni",
        type: "KVKK",
        status: "1-Tamamlandı",
        bitelyInfo: "",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Kesinlikle bulunmalıdır. 'BITELY Kişisel Verilerinin Korunması ve İşlenmesi Aydınlatma Metni'ni okudum ve BITELY Açık Rıza Metni kapsamında kişisel verilerimin işlenmesini kabul ediyorum.",
        contactSection: "Kesinlikle bulunmalıdır. 'BITELY Kişisel Verilerinin Korunması ve İşlenmesi Aydınlatma Metni'ni okudum ve BITELY Açık Rıza Metni kapsamında kişisel verilerimin işlenmesini kabul ediyorum.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "",
    },
    {
        id: "KVKK4",
        title: "KVKK AÇIK RIZA BEYANI",
        type: "KVKK",
        status: "0-Devam Ediyor",
        bitelyInfo: "Bulunmasına gerek yoktur.",
        webPageOpening: "Önceden belirtilen Açık Rıza Metni'nin yönlendirdiği linkte yer almalıdır.",
        membershipScreen: "Önceden belirtilen Açık Rıza Metni'nin yönlendirdiği linkte yer almalıdır.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Yasal Bölümünde Bulunabilir.",
        footerOrLegal: "",
    },
    {
        id: "KVKK5",
        title: "KVKK YURT DIŞI VERİ AKTARIMI AÇIK RIZA METNİ",
        type: "KVKK",
        status: "1-Tamamlandı",
        bitelyInfo: "Bulunmasına gerek yoktur.",
        webPageOpening: "Ayrı bir kutucuk ile onay alınmalıdır. 'Kişisel verilerimin yurt dışına aktarılmasına dair Açık Rıza Metni'ni okudum ve onaylıyorum.",
        membershipScreen: "Ayrı bir kutucuk ile onay alınmalıdır.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmalıdır.",
        footerOrLegal: "",
    },
    {
        id: "KVKK6",
        title: "ÇAĞRI MERKEZİ VEYA CHATBOT KVKK AYDINLATMA METNİ",
        type: "KVKK",
        status: "0-Devam Ediyor",
        bitelyInfo: "‘Kalite standartları gereği görüşmelerimiz kayıt altına alınmaktadır. Kişisel verilerinizin korunmasına ilişkin aydınlatma metnini dinlemek için lütfen yıldızı tuşlayınız.’ ifadesinden sonra * tuşuna basıldıktan sonra ekteki metnin okunması önemlidir.",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "",
    },
    {
        id: "KVKK7",
        title: "KURUMSAL İLETİŞİM POLİTİKASI",
        type: "KVKK",
        status: "0-Devam Ediyor",
        bitelyInfo: "Bulunmasına gerek yoktur.",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "",
    },
    {
        id: "KVKK8",
        title: "KVK BAŞVURU FORMU",
        type: "KVKK",
        status: "0-Devam Ediyor",
        bitelyInfo: "Başvuru geldiğinde en geç 1 ay içerisinde cevaplanmalıdır.",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Kvkk Aydınlatma Metninin içinde link verilmesi gerekmektedir.",
        newsletterSection: "Bu bölümde Yasal Sidebarının İçinde Bulunabilir.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "",
    },
    {
        id: "KVKK9",
        title: "KVKK VERİ SAKLAMA VE İMHA PROTOKOLÜ",
        type: "KVKK",
        status: "1-Tamamlandı",
        bitelyInfo: "Bulunmasına gerek yoktur.",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "",
    },
    {
        id: "KVKK10",
        title: "VERBİS KAYDI",
        type: "KVKK",
        status: "",
        bitelyInfo: "",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Bulunmasına gerek yoktur.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "",
    },
    {
        id: "BI19",
        title: "ÜYELİK VE KULLANIM KOŞULLARI SÖZLEŞMESİ",
        type: "PLATFORM",
        status: "0-Devam Ediyor",
        bitelyInfo: "Satış ile birlikte ya üyelik panelinde sözleşmelere ulaşılabilmelidir veya mail ile gönderilmelidir.",
        webPageOpening: "Bulunmasına gerek yoktur.",
        membershipScreen: "Bulunmasına gerek yoktur.",
        contactSection: "Tık olarak da yapılabilir normal olarak da. Üyelik ve Kullanım Koşulları Sözleşmesi'ni ve Ek Protokollerini Okudum ve Onaylıyorum.",
        newsletterSection: "Bulunmasına gerek yoktur.",
        paymentSection: "Bulunmasına gerek yoktur.",
        footerOrLegal: "",
    },
    {
      id: "BI16",
      title: "MAİL GİZLİLİK İMZASI",
      type: "KVKK",
      status: "0-Devam Ediyor",
      bitelyInfo: "Maillerde bulunması yeterlidir.",
      webPageOpening:"Bulunmasına gerek yoktur.",
      membershipScreen: "Bulunmasına gerek yoktur.",
      contactSection: "Bulunmasına gerek yoktur.",
      newsletterSection: "Bulunmasına gerek yoktur.",
      paymentSection: "Bulunmasına gerek yoktur.",
      footerOrLegal: "Bulunmasına gerek yoktur.",

    },
  ];

  // İhtiyaç halinde diğer dosyalarda bu bileşeni kullanabilirsiniz.

  return (
    <div className={styles.container}>
      {sozlesmeler.map((item) => (
        <div className={styles.card} key={item.id}>
          <h4 className={styles.title}>{item.title}</h4>
          <p><strong>Tür:</strong> {item.type}</p>
          <p><strong>Süreç:</strong> {item.status}</p>
          <p><strong>BITELY Tarafı:</strong> {item.bitelyInfo}</p>
          <p><strong>Web Sayfası Açılışı:</strong> {item.webPageOpening}</p>
          <p><strong>Üyelik Kayıt Ekranı:</strong> {item.membershipScreen}</p>
          <p><strong>İletişim Bölümü:</strong> {item.contactSection}</p>
          <p><strong>E-Bülten Bölümü:</strong> {item.newsletterSection}</p>
          <p><strong>Ödeme Bölümü:</strong> {item.paymentSection}</p>
          <p><strong>Footer veya Yasal Bölümü:</strong> {item.footerOrLegal}</p>
        </div>
      ))}
    </div>
  );
};

export default Metinler;
