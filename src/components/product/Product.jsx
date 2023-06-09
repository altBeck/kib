import React from 'react';
import './product.css';

import prd from '../../assets/panel.png';
import icn from '../../assets/chevron-right.svg';

const Product = () => {
  return (
    <div id="product" className="product--container">  
      <div className="work--header">
        <h3>Our Products</h3>
      </div>

      <div className="product--content">

        <div>
          <img className="prd-img" src={prd} alt="green inverter"/>
        </div>

        <div className="prd--sub">
          <p className="product--sub_container">At Kibobo, we work collaboratively with home owners, listening carefully to needs and preferences, then bringing our solar and engineering to the table - the results are tailored installations that suit the context, tick the boxes, and meet the budget.</p>
          <button type="button" className="main__button"><a href="#">Learn more <img src={icn} alt="arrow"/></a></button>
        </div>
      </div>
    </div>
  )
}

export default Product