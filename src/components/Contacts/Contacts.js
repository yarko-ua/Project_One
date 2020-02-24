import React from 'react';

export default function Contacts() {
  return (
    <section className="contact">
      <div className="wrapper">
        <h2 className="contactsTitle">How to contact us</h2>
        <div className="contacts-container">
          <div className="contacts">
            <p>Adress</p>
            <p>Phone</p>
            <p>Email</p>
            <div className="touch-with-us">
              <h3>Live message for us</h3>
              <textarea placeholder="Your message"></textarea>
              <button type="submit">Send</button>
            </div>
          </div>
          <div className="map" id="map">Here is Map</div>
        </div>
        <div className="socials">
          <a href="https://www.instagram.com"><i>a</i></a>
          <a href="https://www.facebook.com"><i>b</i></a>
          <a href="https://www.twitter.com"><i>c</i></a>
        </div>
      </div>
    </section>
  );
}