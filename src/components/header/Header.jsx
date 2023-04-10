import React from 'react';
import './header.css';

import solar from '../../assets/solar-panel-img.png';

const Header = () => {
  return (
    <div id="home" className="header--container">
      <div className="header--sub_container">
        <div className="header--left_container">
          <h1>Power your future with renewable energy.</h1>
          <p>Reduce your carbon footprint. Save money. Go Kibobo.</p>

          <button type="button" className="main__button"><a href="#">Contact us</a></button>
        </div>
      </div>

      <img src={solar} alt="solar panel"/>
    </div>
  )
}

export default Header