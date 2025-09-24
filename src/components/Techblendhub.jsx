import Navbar from "./Navbar";
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import PeopleSay from "./PeopleSay";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import SpokenEvent from "./SpokenEvent";
import Videos from "./Videos";

/* styles */
import './../styles/reset.scss';
import AreaOfSec from "./AreaOfSec";
import Vision from "./Vision ";
import Companys from "./Companys";
import Rates from "./Rates";


const Techblendhub = () => {

  useEffect( () => {
      AOS.init({  
      duration: 1200, // animation duration in ms
      offset: 100, // trigger point from top
      once: true, // animation runs only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Rates />
      <About />
      <Vision />
      <AreaOfSec />
      <Companys />
      <Videos />
      <SpokenEvent />
      <PeopleSay />
      <Footer />
      <CopyRight />
    </>
  )
}

export default Techblendhub;