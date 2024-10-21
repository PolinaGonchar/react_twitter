import React from 'react';
import './index.css'; // Plik CSS ze stylami

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>About us</h3>
            <p className="text_about">Gonchar Twitter: A social media platform built with React</p>
          </div>
          <div className="col">
            <h3>Cookies</h3>
          </div>
          <div className="col">
            <h3>Privacy</h3>
          </div>
        </div>
        <div className="copyright">
          &copy; 2024 Gonchar Twitter. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;