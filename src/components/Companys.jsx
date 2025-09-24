import React from 'react'
//logos
import stonfi  from "./../assets/com-imgs/STON_fi_Logo.png";
import rocketverse  from "./../assets/com-imgs/rocketverse.jpg";
import superteamng  from "./../assets/com-imgs/superteamng.jpg";
import boundless  from "./../assets/com-imgs/boundless.png";

import './../styles/com.scss';

const Companys = () => {

    const logos = [stonfi, rocketverse, superteamng, boundless];

  return (
    <div className='com-logo'>

        <h2  data-aos="fade-up">As <span>Featured</span> On</h2>

        <div className="logos">
            {logos.map((logo, index) => (
          <div data-aos="zoom-in"
            key={index} className={`circle-item item-${index + 1}`}
            style={{ "--i": index }}
          >
            <img src={logo} alt={`companys dr daphs has worked with featured on `} />
          </div>
        ))}
        </div>

    </div>
  )
}

export default Companys