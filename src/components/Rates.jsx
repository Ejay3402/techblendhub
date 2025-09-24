import React from 'react'
import './../styles/rate.scss'
//import { Plus } from 'react-icons/fa;'

const Rates = () => {
  return (
        <div className="r">

                <div className='rate'>

        <div className="rate-box"  data-aos="zoom-in">
            <h3 data-aos="fade-left">4<span>+</span></h3>
            <h4 data-aos="fade-right">Years in Crypto</h4>
        </div>

        <div className="rate-box" data-aos="zoom-in">
            <h3 data-aos="fade-left">50k<span>+</span></h3>
            <h4 data-aos="fade-right">Community Followers</h4>
        </div>

        <div className="rate-box" data-aos="zoom-in">
            <h3 data-aos="fade-left">100<span>%</span></h3>
            <h4 data-aos="fade-right">Passion for Blockchain</h4>
        </div>

    </div>

        </div>
  )
}

export default Rates