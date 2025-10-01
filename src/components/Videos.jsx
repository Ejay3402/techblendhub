import './../styles/videos.scss';
import { FaYoutube } from "react-icons/fa6";

import React from 'react'

const Videos = () => {
  return (
    <div className='Videos'>
        <h2 data-aos="fade-up">My <span>Videos</span></h2>
        <h3 data-aos="fade-down">watch some of mine videos here like and subsribe</h3>

        <div className="video-grid">
            
            <div className="video" data-aos="fade-up">
                <figure>
                                <iframe src="https://www.youtube.com/embed/_j4rL96sSNs?si=BYIWK6ekPE5hVy5y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
            </div>
            
            <div className="video" data-aos="fade-up">
                <figure>
                                <iframe src="https://www.youtube.com/embed/PJM2WYAKJD4?si=PuiP0P7aEffMYWgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
            </div>
            <div className="video" data-aos="fade-up">
                <figure>
                                <iframe src="https://www.youtube.com/embed/ax060VxoYm8?si=ndWv4Xzolgvdcj7W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
            </div>

        </div>

      {/* watch more video */}
      <h3>Watch More</h3>
      <a data-aos="fade-up" href="https://youtube.com/@drxchange8456"><FaYoutube className='icons-v'/></a>

    </div>
  )
}

export default Videos;

