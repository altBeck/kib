import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer--container">
      <div className="footer--header">
        <h1>KIBOBO</h1>
        <p>Nigeria's leading energy distributor</p>
      </div>

      <div className="nav--links">
        <a className="home" href="/">Home</a>
        <a>Services</a>
        <a>Products</a>
        <a>Work</a>
      </div>

      <div className="line"></div>
    </div>
  )
}

export default Footer