import React from "react";
import "./Footer.css";
import ContactInfo from "./ContactInfo";

const Footer: React.FC = () => {
    return (
      <footer className="footer">
        <div className="contact-section">
          <ContactInfo />
        </div>
        <div className="bottom-rectangle" />
      </footer>
    );
  };
  
  export default Footer;