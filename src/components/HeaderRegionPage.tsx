import React from "react";
import "../styles/HeaderRegionPage.css";

const HeaderRegionPage: React.FC = () => {
   return (
    <header className="header">
      <div className="header-logo">
        <div>WTG</div>
        <div>where to go</div>
      </div>
      <nav className="nav-links">
        <button>Про нас</button>
        <button>Контакти</button>
        <button>Мій кабінет</button>
      </nav>
    </header>
  );
};

export default HeaderRegionPage;
