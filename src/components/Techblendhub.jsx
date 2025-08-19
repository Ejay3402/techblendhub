import Navbar from "./Navbar";
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import PeopleSay from "./PeopleSay";
import Footer from "./Footer";
import CopyRight from "./CopyRight";


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
      <About />
      <PeopleSay />
      <Footer />
      <CopyRight />
    </>
  )
}

export default Techblendhub;