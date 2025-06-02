import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src="/logo.svg" alt="WTG Logo" className="logo-img" />
      </div>
      <nav className="nav">
        <button onClick={() => scrollToSection('about-us')}>Про нас</button>
        <button onClick={() => scrollToSection('footer')}>Контакти</button>
        <button>Мій кабінет</button>
      </nav>
    </header>
  );
};

export default Header;