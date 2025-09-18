import React from 'react'
import { FcDownload } from "react-icons/fc";
import dennis2 from './../assets/images/dennis2.jpg';
import cv from './../assets/cv pdf/My Resume.pdf';
import './../styles/about.scss';

const About = () => {



  return (
    <div className='about' id='about'>
        <h2 data-aos="fade-down">About<span>Me</span></h2>
        <h3 data-aos="fade-up">Transforming complex market data into profitable strategies</h3>

        <div className="about-grid">
            <div className="about-grid__left" data-aos="fade-right">
                <figure>
                    <img src={dennis2} alt="Dr Daphs" />
                </figure>
            </div>
            <div className="about-grid__right">
                <h3 data-aos="fade-down">Professional Educator</h3>
                <p data-aos="fade-up">
                    Hello i am <span>Dennis ola</span> also know has <span>Dr Daphs</span>, With over 5 years in the cryptocurrency space, I've navigated multiple market cycles and developed a deep understanding of both technical analysis and blockchain fundamentals. My mission is to bridge the gap between complex DeFi protocols and Blockchain Development.
                </p>
                <p data-aos="fade-right">
                    Let’s collaborate to unlock your brand’s full potential and create lasting connections with your audience.
                </p>
                  <div className="prove" data-aos="fade-up">
                    <h4>Content Strategy</h4>
                    <h4>Brand Strategy</h4>
                    <h4>Blockchain Development</h4>
                    <h4>Project Manaager</h4>
                  </div>
                 <a href="/techblendhub/My Resume.pdf" download={cv}  alt="Download CV dennis ola cv dr daphs cv">
                    <button data-aos="fade-down">Download CV <FcDownload className='icon-d'/></button>
                 </a>
            </div>
        </div>
    </div>
  )
}

export default About;