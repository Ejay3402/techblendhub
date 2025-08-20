import React from 'react'
import './../styles/spolenEvent.scss';
import drDaphsSpokenEvent from './../assets/spolen event/dr daphs spoken event.jpeg';

const SpokenEvent = () => {

    const imgs = [
        {
            img : drDaphsSpokenEvent,
        }
    ]

  return (
    <div className='spokenEvent'>
        <h2  data-aos="fade-up">My <span>Spoken Events</span></h2>
        <h3 data-aos="fade-down">I have shared my knowledge about branding, content strategy and other interesting topics in the following events</h3>

        {
            imgs.map(i => (
                <div className="spokeneventImg"  data-aos="zoom-out">   
                    <figure>
                        <img src={i.img} alt="dr daphs spoken event" />
                    </figure>
                </div>
            ))
        }

    </div>
  )
}

export default SpokenEvent;