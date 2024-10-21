import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './index.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        <h1 className="header-title">Gonchar Twitter</h1>
      </div>
      <div className="header-right">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;