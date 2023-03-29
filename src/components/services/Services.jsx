import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services__container">
      <div className="services__sub-container">
        <div className="services--header">
          <h2>Our <br /> Services</h2>
          <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
        </div>

        <div className="services--sub_header">
          <div className="module">
            <h2>Solar Accessories</h2>
            <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
          </div>

          <div className="module">
            <h2>Solar Accessories</h2>
            <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
          </div>

          <div className="module">
            <h2>Solar Accessories</h2>
            <p>Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
          </div>
        </div>

        <button type="button" className="main__button contact"><a href="#">Contact us</a></button>

      </div>
    </div>
  )
}

export default Services