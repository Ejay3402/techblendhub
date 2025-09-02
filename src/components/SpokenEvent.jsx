import React from 'react'
import './../styles/spolenEvent.scss';
import drDaphsSpokenEvent from './../assets/spolen event/dr daphs spoken event.jpeg';
import event1 from './../assets/spolen event/event1.jpg';
import event2 from './../assets/spolen event/event2.jpg';
import event3 from './../assets/spolen event/event3.jpg';
import event4 from './../assets/spolen event/event4.jpg';
import event5 from './../assets/spolen event/event5.jpg';
import event6 from './../assets/spolen event/event6.jpg';

/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SpokenEvent = () => {

    const imgs = [
        {
            img : drDaphsSpokenEvent,
            id : 1
        },
        {
            img : event1,
            id : 2
        },
        {
            img : event2,
            id : 3
        },
        {
            img : event3,
            id : 4
        },
        {
            img : event4,
            id : 5
        },
        {
            img : event5,
            id : 6
        },
        {
            img : event6,
            id : 7
        },
    ]

  return (
    <div className='spokenEvent'>
        <h2 data-aos="fade-up">My <span>Spoken Events</span></h2>
        <h3 data-aos="fade-down">I have shared my knowledge about branding, content strategy and other interesting topics in the following events</h3>
        <div className="image-slider">
             <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        //navigation={true} // ✅ enables arrows
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
      >
        {imgs.map(({id , img}) => (
          <SwiperSlide key={id} width='100%'>
            <figure data-aos="fade-up" className='slide-figure'>
                <img src={img} alt={`dennis ola spoken events`} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
       

    </div>
  )
}

export default SpokenEvent;