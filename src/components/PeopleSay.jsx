import './../styles/peoplesay.scss';
import { motion, AnimatePresence } from 'framer-motion';

import work1 from './../assets/prove/work1.jpg';
import work2 from './../assets/prove/work2.jpg';
import work3 from './../assets/prove/work3.jpg';
import work4 from './../assets/prove/work4.jpg';
import { useEffect, useState } from 'react';


const PeopleSay = () => {

  const testimonials = [
    {
      img : work1,
      name : 'dr daphs prove of works '
    },
    {
      img : work2,
      name : 'dr daphs prove of works '
    },
    {
      img : work3,
      name : 'dr daphs prove of works '
    },
    {
      img : work4,
      name : 'dr daphs prove of works '
    },
  ]

  //auto slide every 5 seconds

  const [index, setIndex] = useState(0);

  useEffect(() => {
      const timeer = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timeer);
  }, [testimonials.length]);


  return (

    <div className='peoplesay'>
        <h2  data-aos="fade-up">Testimonial</h2>
        <h3  data-aos="fade-down">Success stories</h3>

        <div className="testmocard">
            <AnimatePresence mode='wait'>
            <motion.div
            key={index}
            className="testimonials__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <figure  data-aos="fade-down">
              <img src={testimonials[index].img} alt={testimonials[index].name} />
            </figure>
            {/* <p className="testimonials__text">"{testimonials[index].text}"</p> */}

          </motion.div>
        </AnimatePresence>
        </div>
        

    </div>
  )
}

export default PeopleSay;