import React from 'react'
import './../styles/welcome.scss'
import TechblendhubLogo from './../logo/tbhlogo.png';
import {motion, AnimatePresence } from 'framer-motion';

const Welcome = () => {
  return (
    <div className='welcome'>
        <figure>
            <img data-aos="zoom-in" src={TechblendhubLogo} alt="Techblendhub TechblendhubLogo techblendhub logo" />
        </figure>

    </div>
  )
}

export default Welcome