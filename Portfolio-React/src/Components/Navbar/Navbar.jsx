import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Accueil</li>
            <li>À propos</li>
            <li>Compétences</li>
            <li>Expérience</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect"> Contacter Moi</div>
    </div>
  )
}

export default Navbar
