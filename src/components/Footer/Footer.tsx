import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          TrustHaven Accounting and Tax Inc. — Where Precision Meets Peace of
          Mind — Toronto, Ontario
        </p>
        <a href="mailto:info@trusthavenaccounting.ca" className="footer-link">
          info@trusthavenaccounting.ca
        </a>
      </div>
    </footer>
  );
};

export default Footer;
