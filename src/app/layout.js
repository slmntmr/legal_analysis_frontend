import '../styles/globals.css'; // Global stiller
import '../styles/responsive.css'; // Responsive stiller
import Header from '../components/Header'; // Header bileşenini ekliyoruz
import Footer from '../components/Footer'; // Footer bileşenini ekliyoruz

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <Header /> {/* Header her sayfada görüntülenecek */}
        <main className="main-content" style={{ padding: '20px', marginTop: '20px' }}>
          {children} {/* Sayfa içeriği burada yer alacak */}
        </main>
        <Footer /> {/* Footer her sayfada görüntülenecek */}
      </body>
    </html>
  );
}
