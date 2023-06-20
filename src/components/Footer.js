// Footer.js
import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer" >
      <div className="copyright">
        &copy; 2023 Frontend Assignment
      </div>
      <div className="additional-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
