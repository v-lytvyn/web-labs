import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="branding">
      <h4>Branding stuff</h4>
      <p>This website and its content are the property of IHMDb Company and may not be reproduced, distributed, or used without permission. All trademarks, logos, and brand names are the property of their respective owners.</p>
    </div>
    <div className="footer-logo">
      <img src="/img/logo.png" alt="Logo" />
    </div>
    <div className="social-icons">
      <a href="#"><img src="/img/facebook.png" alt="Facebook" /></a>
      <a href="#"><img src="/img/x.png" alt="Twitter" /></a>
      <a href="#"><img src="/img/instagram.png" alt="Instagram" /></a>
    </div>
  </footer>
);

export default Footer;
