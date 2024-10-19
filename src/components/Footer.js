import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <p><i className="fas fa-map-marker-alt"></i> Balmumcu Mah. Dellalzade Sk. No:3 Beşiktaş/İstanbul</p>
          <p><i className="fas fa-phone-alt"></i> <a href="tel:+1234567890">0212 909 55 30</a></p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:info@karataspartners.com">info@karataspartners.com</a></p>
          <p><i className="fas fa-globe"></i> <a href="https://karataspartners.com" target="_blank" rel="noopener noreferrer">karataspartners.com</a></p>
        </div>
        <div className="copyright">
          © 2024 Karataş & Partners
        </div>
      </div>
    </footer>
  );
};

export default Footer;
