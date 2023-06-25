import logo from '../images/logo.png'
import { FaTwitter, FaFacebook, FaInstagram, FaMedium  } from "react-icons/fa6";

export default function Card() {
  return (
    <div className="container">
    <div className="pic">
        <img className="img" src={logo} alt="profile-pic" /></div>    
    <div className="Card">      
      <h1 className="name">Emmanuel Tofa</h1>
      <p className="profession">Full Stack Developer</p>
      <div className="social-links">
        <a href="https://github.com/uno36" target='_blank' rel="noreferrer"><button className="github" type="submit">Github</button></a>
        <a href="https://www.linkedin.com/in/emmanuel-tofa-673b2516a/" target='_blank' rel="noreferrer"><button className="Linkedin" type="submit">LinkedIn</button></a>
      </div>
      <h3 className="About">About</h3>
      <p className="about-me">I am a Full Stack Developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. I am open for hire</p>
      <h3 className="Intrests">Intrests</h3>
      <p className="my-intrests">Coding expert. Algoritnm scholar. Reader. Internet fanatic. Body Health. Entrepreneur. Tech geek. Adventurer. coleslaw fanatic.</p>
     
    </div>   
    <div className="socials">
      <a href="https://twitter.com/tofauemmanuel" target="_blank" rel="noreferrer"><FaTwitter size="2rem" className="icon"/></a>
      <a href="https://www.facebook.com/emmanuel.tofa.5/" target="_blank" rel="noreferrer"><FaFacebook size="2rem" className="icon"/></a>
      <a href="https://www.instagram.com/emmanuelutofa/" target="_blank" rel="noreferrer"><FaInstagram size="2rem"className="icon" /></a>
      <a href="https://medium.com/me/stats/post/9989a5e0a852" target="_blank" rel="noreferrer"><FaMedium size="2rem"className="icon" /></a>
    </div>
    </div>
  )
}