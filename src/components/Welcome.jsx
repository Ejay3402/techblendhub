import React from 'react'
import './../styles/welcome.scss'
import TechblendhubLogo from './../assets/logo/logo with bg.png';
import {motion, AnimatePresence } from 'framer-motion';

const Welcome = () => {
  return (
    <div className='welcome'>

        <h1 data-aos="fade-down">Welcome To</h1>
        <figure>
            <img data-aos="fade-up" src={TechblendhubLogo} alt="Techblendhub TechblendhubLogo techblendhub logo" />
        </figure>

    </div>
  )
}

export default Welcome