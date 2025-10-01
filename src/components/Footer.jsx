import './../styles/footer.scss';
import { FcCopyright } from "react-icons/fc";
import { FaTiktok } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoMedium } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { a } from 'framer-motion/client';




const Footer = () => {


    const socialLinks = [
        {
            icon : <HiOutlineMail className='icons-1'/>,
            title : 'E-Mail',
            name : 'olamarydennis123@gmail.com',
            link : 'https://olamarydennis123@gmail.com'
        },
        {
            icon : <GrFacebookOption className='icons-1'/>,
            title : 'Facebook',
            name : '@Dennis Ola',
            link : 'https://www.facebook.com/profile.php?id=100076968984494'
        },
        {
            icon : <IoLogoWhatsapp className='icons-1'/>,
            title : 'WhatsApps',
            name : '@Dr daphs',
            link : 'https://wa.me/2347034400818'
        },
        {
            icon : <FaLinkedinIn className='icons-1'/>,
            title : 'Linkedin',
            name : '@Dennis Ola',
            link : 'https://www.linkedin.com/in/dennis-ola-80417023b/'
        },
        {
            icon : <IoLogoMedium className='icons-1'/>,
            title : 'Medium',
            name : '@olamarydennis123',
            link : 'https://medium.com/@olamarydennis123'
        },
        {
            icon : <FaXTwitter className='icons-1'/>,
            title : 'X',
            name : '@AdakoleOla',
            link : 'https://x.com/AdakoleOla'
        },
        {
            icon : <FaInstagram className='icons-1'/>,
            title : 'Instagram',
            name : '@oladennisadakole',
            link : 'https://www.instagram.com/oladennisadakole'
        },
        {
            icon : <FaYoutube className='icons-1'/>,
            title : 'YouTube',
            name : '@drxchange8456',
            link : 'https://youtube.com/@drxchange8456'
        },
    ]

  return (
    <footer id='contact'>
        <h2 data-aos="fade-up">Get In <span>Touch</span></h2>
        <h3 data-aos="fade-down">Let's connect!</h3>

        <div className="footer-grid">
            <div className="footer-left">
            
                    <h4  data-aos="fade-right">How to reach me</h4>

                    <a href="" data-aos="fade-up"><FaLocationDot /> Nigeria, Lagos</a>

                    <h4 data-aos="fade-right">Follow me on social media</h4>
                <div className="socials-links">
                    {socialLinks.map(( {name , title , link , icon} ) => (
                        <a href={link}>
                            <div className="so-l" key={Math.random()} data-aos="zoom-out">
                            <div className="l" data-aos="fade-right">
                                {icon}
                            </div>
                            <div className="r" data-aos="fade-down">
                                <h3>{title}</h3>
                                <p>{name}</p>
                            </div>
                        </div>
                        </a>
                    ) )}

                </div>

                

                
                    

            </div>
            <div className="footer-right"  data-aos="fade-up">
                <form action="https://formspree.io/f/manydvpg" method="post">
                    <h3>Send me a message</h3>

                    <label htmlFor="First-Name">First Name</label>
                    <input type="text" name="Name" id="First-Name" placeholder="First Name" required/>

                    <label htmlFor="Last-Name">Last Name</label>
                    <input type="text" name="Last Name" id="Last-Name" placeholder="Last Name" required/>

                    <label htmlFor="WhatApps-Number">WhatApps Number</label>
                    <input type="number" name="WhatApps Number" id="WhatApps-Number" placeholder="WhatApps Number" required/>

                    <label htmlFor="Message">Message</label>
                    <textarea name="Message" id="Message" rows={3} cols={1} required></textarea>

                    <input className='btn-form-sub' type="submit" value="Submit" />

                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer;