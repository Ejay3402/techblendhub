import TechblendhubLogo from './../assets/logo/logo no bg.png';
import {motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './../styles/navbar.scss';
import { a } from 'framer-motion/client';


const Navbar = () => {

     const [menuOpen, setMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);

     useEffect( () => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        }
        window.addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll);
     }, []);

     const links = [
        {
            name : 'Home',
            url : '#'
        },
        {
            name : "About",
            url : '#about'
        },
        {
            name : 'My Courses',
            url : 'https://techblendhub.vercel.app'
        },
        {
            name : 'Book secction',
            url : 'https://techblendhub.vercel.app'
        },
        {
            name : 'Contact',
            url : '#contact'
        },
     ];

  return (

    <div>

        <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>

            <figure className="navbar__logo" data-aos="fade-right">
                <img src={TechblendhubLogo} alt="techblendhub logo" />
            </figure>

            {/* Desktop links */}
            <ul className='navbar__links'  data-aos="fade-left" >
                {links.map( (link, i) => (
                    <li key={i}><a href={link.url} target={link.url.startsWith("http") ? "_blank" : "_self"}>{link.name}</a></li>
                ))}
            </ul>

            {/* phone mode  */}
                <div
        className={`navbar__toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(true)}
       data-aos="fade-left">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay + Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="navbar__mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <div className="navbar__close" onClick={() => setMenuOpen(false)} data-aos="fade-up">
                ✕
              </div>
              <ul data-aos="fade-down">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : "_self"}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
        


        </nav>

    </div>
  )
}

export default Navbar;