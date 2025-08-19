import React from 'react'
import './../styles/footer.scss';
import { FcCopyright } from "react-icons/fc";

const CopyRight = () => {
  return (
    <div className="copy-right">
        <p><FcCopyright className='ic'/>Copyright 2025, All Rights Reserved , made by <a href="https://wa.me/2349027650267">Elijah Jacob</a> .</p>
    </div>
    
  )
}

export default CopyRight