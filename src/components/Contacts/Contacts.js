import React from 'react';
import './Contact.scss';


export default function Contacts() {
  return (
    <section className="contact">
      <div className="wrapper">
        <h2 className="contactsTitle">How to contact us</h2>
        <div className="contacts-container">
          <div className="contacts">
            <div className="contacts__contacts">
              <p>
                <i class="fas fa-map-marker-alt"></i>
                50 st.Ozerna, Chornomorske, Ukraine
            </p>
              <a href="tel:+380631600365">
                <i class="fas fa-mobile-alt"></i>
                +380631600365
              </a>
              <a href="mailto:ssilvias13@gmail.com">
                <i class="fas fa-at"></i>
                ssilvias13@gmail.com
            </a>
            </div>
            <div className="contacts__socials">
              <a href="https://www.instagram.com">
                <i class="fas fa-camera-retro"></i>
              </a>
              <a href="https://www.facebook.com">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.twitter.com">
                <i class="fab fa-twitter-square"></i>
              </a>
            </div>
            <div className="touch-with-us">
              <h3>Live message for us</h3>
              <textarea placeholder="Your message"></textarea>
              <button type="submit">Send</button>
            </div>
          </div>
          <div className="map" id="map">Here is Map</div>
        </div>

      </div>
    </section >
  );
}