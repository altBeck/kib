import React from 'react'
import info from '../../assets/info.jpg';

import './work.css';

const Work = () => {
  return (
    <div id="work" className="work__container">
      <div className="work--header">
        <h3>How It Works</h3>
      </div>

      <div className="work--main">
        <img src={info} alt="inverter information"/>

        <div className="work--content">

          <ul>
            <li>Our hybrid solar systems include solar panels, a smart inverter & battery.</li>
            <li>The system is connected to your existing electrical installation in your house.</li>
            <li>The solar panels will generate sustainable electricity during the day.</li>
            <li>Excess energy from the solar panels will charge the battery for usage at night and during load-shedding</li>
            <li>You will still be connected to the grid as backup for when the solar panels and battery cannot cover your consumption. This is normally during nighttime and on cloudy & rainy days. The changeover between solar, batteries and grid happens automatically.</li>
            <li>We monitor the system and take care of maintenance.</li>
          </ul>


        </div>
      </div>



    </div>
  )
}

export default Work