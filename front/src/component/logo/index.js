import React from 'react';
import logo from './logo.png';
import './index.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo-image" />
    </div>
  );
}

export default Logo;
