import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className = 'hero'>
        <img src={profile_img} alt="" />
        <h1>Je suis Alexandre GOURAUD, un jeune développeur FullStack</h1>
        <p>Je suis actuellement en recherche d'alternance donc si vous recherchez un développeur motivé et autodidacte je suis juste là</p>
        <div className='hero-action'>
            <div className='hero-connect'>Contacter Moi</div>
            <div className='hero-resume'>Voici mon CV</div>
        </div>
    </div>
  )
}

export default Hero