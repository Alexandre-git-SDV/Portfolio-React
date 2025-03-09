import React from "react";
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Alexandre GOURAUD Contact</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Je suis actuellement disponible pour une alternance en septembre 2025</p>
          <p>Si vous voulez me contacter voici mon linkedIn et mon mail</p>
          <div className="contact-details">

            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>alexandre.gouraud@supdevinci-edu.fr</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p> Rennes </p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p> 07 xx xx xx xx</p>
            </div>

          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Votre Nom</label>
          <input type="text" placeholder="Entrer votre nom" name="name"/>

          <label htmlFor="">Votre Email</label>
          <input type="text" placeholder="Entrer votre email" name="email"/>

          <label htmlFor="">Écrivez votre message ici</label>
          <textarea name="message" rows={10} placeholder="Écrivez votre message ici"> </textarea>
          <button className="contact-submit"> Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
