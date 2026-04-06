import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          TrustHaven Accounting and Tax Inc. — Where integrity meets excellence.
          Canada and USA.
        </p>
        <a href="mailto:info@trusthaven.biz" className="footer-link">
          info@trusthaven.biz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
