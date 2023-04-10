import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <><p><a href="#services">Services</a></p>
  <p><a href="#product">Products</a></p>
  <p><a href="#work">How It Works</a></p>
  <button type="button" className="poa__navbar-links_stake"><a href="#">Contact us</a></button></>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState (false);

  return (
    <div className="route">
      <div className="poa__navbar">

        <div className="poa__navbar-links">
          <div className="poa__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="poa__navbar-links_container">
            <Menu />
          </div>

        </div>
        <div className="poa__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="poa__navbar-menu_container">
              <div className="poa__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Navbar