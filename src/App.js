import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter, Route, } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header categories={['home', 'snowboards', 'bindings', 'boots', 'contacts']} />
        <Route path='/home' component={Home} />
        <Route path='/snowboards'
          component={(props) => (<Main
            snowboard={{}}
            options={["152cm", "155cm", "157cm", "160cm", "161cm"]}
            brands={["Burton", "K2", "LibTech", "NeverSummer"]}
            {...props}
          />)} />
        <Route path='/bindings'
          component={(props) => (<Main
            binding={{}}
            options={["XS", "S", "M", "L", "XL"]}
            brands={["Burton", "K2", "Gnu", "Union"]}
            {...props}
          />)} />
        <Route path='/boots'
          component={(props) => (<Main
            boot={{}}
            options={["7.0", "7.5", "8.0", "8.5", "9.0", "9.5", "10.0"]}
            brands={["Burton", "K2", "Rome", "Ride"]}
            {...props}
          />)} />
        <Route path='/contacts' component={Contacts} />
      </BrowserRouter>
    );
  }

}

function Home() {
  return (
    <section>
      <div className="wrapper">
        <h1 className="mainTitle">Hello world</h1>
      </div>
    </section>
  );
}
function Contacts() {
  return (
    <section>
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

export default App;
