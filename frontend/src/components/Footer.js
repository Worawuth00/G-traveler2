import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.line.me"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="fab fa-line"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; G-Travel tour company 2021.all right reserved
      </p>
    </footer>
  );
};

export default Footer;
