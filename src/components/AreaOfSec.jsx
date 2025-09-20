import React from 'react'
import './../styles/areas.scss'
import { Blocks, GraduationCap, Video } from "lucide-react";
import { FaCubes, FaChalkboardTeacher , FaVideo  } from "react-icons/fa";

const AreaOfSec = () => {

    const areas = [
        {
            title : `Blockchain Technology`,
            content : `Deep understanding of how blockchain systems work and how to implement them effectively`,
            icon: <FaCubes className='ixo' size={40} strokeWidth={2} fill="#FFD400"/>,
        },
        {
            title : `Decentralized Finance Educator`,
            content : `Teaching what decentralized finance is, how it works, and why it matters in the future of money.`,
            icon: <GraduationCap className='ixo' size={40} strokeWidth={2} color="#FFD400"/>,
        },
        {
            title : `Content Creator`,
            content : `creating engaging, valuable, and creative material across different platforms to inform, entertain, or inspire an audience.`,
            icon: <Video className='ixo' size={40} strokeWidth={2} color="#FFD400"/>,
        },
    ]


  return (
    <div className='area'>
        <h2 data-aos="fade-down">Areas of <span>Expertise</span></h2>

        <div className="areas-grid">
            {areas.map( ({title, content, icon}) => (
                <div className="area-box" data-aos="fade-up"key={Math.random()}>
                    {icon}
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default AreaOfSec;