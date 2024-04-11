import './HomePage.css'
import '../responsividade.css'
import linkedinlogo from '../images/icons-linkedin.png'
import facebooklogo from '../images/icons-facebook.png'
import instagramlogo from '../images/icons-instagram.png'
import youtubelogo from '../images/icons-youtube.png'
import Header from '../components/Header/Header'
import Section from '../components/Section/Section'
import SectionCompanies from '../components/SectionCompanies/SectionCompanies'
import SectionImagesFlex from '../components/SectionImagesFlex/SectionImagesFlex'
import SectionImg from '../components/SectionImg/SectionImg'
import Footer from '../components/Footer/Footer'


function HomePage() {
    return (
    <>
    <Header />
      <div className="container">
        <h1 className="title" >Revolucionar negócios <br/>  e impactar pessoas</h1>
        <p className="text" > resolvendo desafios complexos através
            da nossa cultura e tecnologia
        </p>
      </div>      
        <video className="video">
           <iframe title="certsyshome"
                src="https://www.youtube.com/watch?v=xqRJcW7eMaM?autoplay=1&mute=1">
           </iframe>
        </video>
      <Section />
      
      <SectionImg />

      <SectionImagesFlex />

      <SectionCompanies />
      <div className="box-social-medias">
        <h4 className="h4-content" >
          SIGA A CERTSYS NAS REDES SOCIAIS
        </h4>
        <div className="div-content" >
          <a href="/#">
            <img src={linkedinlogo} alt="Linkedin Logo" />
          </a>
          <a href="/#">
            <img src={facebooklogo} alt="Facebook Logo" />
          </a>
          <a href="/#">
            <img src={instagramlogo} alt="Instagram Logo" />
          </a>
          <a href="/#">
            <img src={youtubelogo} alt="Youtube Logo" />
          </a>
        </div>
      </div>
    <Footer />
    </>
    )

}

export default HomePage
