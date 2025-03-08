import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>À propos de moi</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt="" />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>Je suis un développeur web et logiciel</p>
                    <p>Je suis passionné par la technologie et l'innovation et ma volonté est de créer des outils</p>
                    <p>Si vous cherchez quelqu'un de motivé et autodidacte, je suis actuellement en recherche d'alternance</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "90%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>Java & C#</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width: "50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projets réalisés</p>
            </div>
            
            <hr />

            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projets réalisés</p>
            </div>

            <hr />

            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projets réalisés</p>
            </div>
        </div>

    </div>
  )
}

export default About