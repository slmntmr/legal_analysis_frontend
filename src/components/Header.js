import React from 'react';
import '../styles/header.css'; // CSS dosyasını import ediyoruz

const Header = () => {
  return (
    <header className="header">
      {/* SVG ile örümcek ağı */}
      <div className="spider-web-container">
        <svg className="spider-web" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="0.5" fill="none"/>
          <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="0.5"/>
          <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="0.5"/>
          <line x1="20" y1="20" x2="80" y2="80" stroke="white" strokeWidth="0.5"/>
          <line x1="20" y1="80" x2="80" y2="20" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="container">
        <h1 className="navbar-brand">Legality AI</h1>
      </div>
    </header>
  );
};

export default Header;
