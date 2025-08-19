import './../styles/hero.scss'
import drDaphs from './../assets/images/dennis2-removebg-preview.png';


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero__left">
            <h4 className='h4' data-aos="fade-down">Content Marketer | Blockchain Educator</h4>
            <h1 className='h1' data-aos="fade-up">Hello! I’m <span>Dr Daphs</span></h1>
            <p className='hero-p' data-aos="fade-up">Results-driven Content Marketer with a passion for creating engaging content that drives real connections. With experience in hosting events and customer service, I understand the importance of building strong relationships and delivering exceptional user experiences. I bring a unique blend of creativity, technical skills, and people-centric approach to my content marketing work, driving growth and community engagement through compelling storytelling a   nd strategic content creation.</p>
            <button className='hero-btn' data-aos="fade-down">Schedule a Brand Audit</button>
        </div>
        <div className="hero__right">
            <figure data-aos="fade-down">
                <img src={drDaphs} alt="dr draphs techblendhub" />
            </figure>
        </div>
    </div>
  )
}

export default Hero