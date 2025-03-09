import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
const Footer = () => {
  return (
    <div id='footer' className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="footer_logo" />
            <p>Je suis un développeur Fullstack et Étudiant </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Legal</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
