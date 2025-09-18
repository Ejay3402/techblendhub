import React from 'react'
import './../styles/areas.scss'
import { Blocks, GraduationCap, Video } from "lucide-react";

const AreaOfSec = () => {

    const areas = [
        {
            title : `Blockchain Technology`,
            content : `Deep understanding of how blockchain systems work and how to implement them effectively`,
        },
        {
            title : `Decentralized Finance Educator`,
            content : `Teaching what decentralized finance is, how it works, and why it matters in the future of money.`,
        },
        {
            title : `Content Creator`,
            content : `creating engaging, valuable, and creative material across different platforms to inform, entertain, or inspire an audience.`,
        },
    ]


  return (
    <div className='area'>
        <h2 data-aos="fade-down">Areas of <span>Expertise</span></h2>

        <div className="areas-grid">
            {areas.map( ({title, content}) => (
                <div className="area-box" data-aos="fade-up"key={Math.random()}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    
      <Blocks size={40} strokeWidth={2} color="#FFD400" />  {/* Blockchain */}
      <GraduationCap size={40} strokeWidth={2} color="#FFD400" />  {/* Educator */}
      <Video size={40} strokeWidth={2} color="#FFD400" />
                </div>
            ))}
        </div>

    </div>
  )
}

export default AreaOfSec