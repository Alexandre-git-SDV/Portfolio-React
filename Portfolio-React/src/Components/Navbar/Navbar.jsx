import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={50} href='#home' onClick={() => setMenu("home")}><p>Accueil</p>{menu === "home" ? <img src={underline} alt="underline" /> : null}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => setMenu("about")}><p>À Propos</p>{menu === "about" ? <img src={underline} alt="underline" /> : null}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services' onClick={() => setMenu("services")}><p>Services</p>{menu === "services" ? <img src={underline} alt="underline" /> : null}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work' onClick={() => setMenu("work")}><p>Portfolio</p>{menu === "portfolio" ? <img src={underline} alt="underline" /> : null}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu("contact")}><p>Contact</p>{menu === "contact" ? <img src={underline} alt="underline" /> : null}</AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu("contact")}><p>Contacter Moi</p></AnchorLink></div>
    </div>
  );
}

export default Navbar
