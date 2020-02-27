import React from 'react';
import './Contact.scss';
import SimpleMap from '../Map';

export default function Contacts() {
  return (
    <section className="contact">
      <div className="wrapper">
        <h2 className="contactsTitle">How to contact us</h2>
        <div className="contacts-container">
          <div className="contacts">
            <div className="contacts__contacts">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                50 st.Ozerna, Chornomorske, Ukraine
            </p>
              <a href="tel:+380631600365">
                <i className="fas fa-mobile-alt"></i>
                +380631600365
              </a>
              <a href="mailto:ssilvias13@gmail.com">
                <i className="fas fa-at"></i>
                ssilvias13@gmail.com
            </a>
            </div>
            <div className="contacts__socials">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-camera-retro"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
            <div className="touch-with-us">
              <h3>Live message for us</h3>
              <form onSubmit={() => alert('Thank you for letter')}>
                <textarea placeholder="Your message" required></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          <div id="map">
            <SimpleMap />
          </div>
        </div>

      </div>
    </section >
  );
}