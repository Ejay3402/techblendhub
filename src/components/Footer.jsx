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



const Footer = () => {


  return (
    <footer id='contact'>
        <h2 data-aos="fade-up">Get In <span>Touch</span></h2>
        <h3 data-aos="fade-down">Let's connect!</h3>

        <div className="footer-grid">
            <div className="footer-left">
                <div className="com">
                    
                    <h4  data-aos="fade-right">How to reach me</h4>
                    <a href="#" data-aos="fade-up"><HiOutlineMail className='icons-1'/> olamarydennis123@gmail.com</a> <br />
                    <a href="" data-aos="fade-up"><FaLocationDot className='icons-1'/> Nigeria, Lagos</a>
                </div>

                <div className="socials-links">
                    <h4 data-aos="fade-right">Follow me on social media</h4>
                    <div className="links">
                        <a data-aos="fade-up" href=""><GrFacebookOption className='icons-2'/></a>
                        <a data-aos="fade-up" href=""><IoLogoWhatsapp className='icons-2'/></a>
                        <a data-aos="fade-up" href="https://medium.com/@olamarydennis123"><IoLogoMedium className='icons-2'/></a>
                        <a data-aos="fade-up" href="https://x.com/AdakoleOla"><FaXTwitter className='icons-2'/></a>
                        <a data-aos="fade-up" href="https://www.instagram.com/oladennisadakole"><FaInstagram className='icons-2'/></a>
                        <a data-aos="fade-up" href="https://youtube.com/@drxchange8456"><FaYoutube className='icons-2'/></a>
                    </div>
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

export default Footer


/* 

<iframe width="560" height="315" src="https://www.youtube.com/embed/PJM2WYAKJD4?si=cVh5_IH9AYDuMoX6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

*/