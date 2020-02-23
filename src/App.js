import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Homepage/Home'
import Contacts from './components/Contacts_page/Contacts'
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
        <Route exact path='/' component={Home} />
        <Route path='/snowboards'
          component={(props) => (<Main
            snowboard={{}}
            options={["145cm", "147cm", "149cm", "151cm", "152cm", "154cm", "155cm", "157cm", "160cm", "161cm"]}
            brands={["Burton", "K2", "LibTech", "NeverSummer", "Rome"]}
            {...props}
          />)} />
        <Route path='/bindings'
          component={(props) => (<Main
            binding={{}}
            options={["XS", "S", "M", "L", "XL"]}
            brands={["Burton", "K2", "Gnu", "Union", "Arbor", "Ride", "Rome"]}
            {...props}
          />)} />
        <Route path='/boots'
          component={(props) => (<Main
            boot={{}}
            options={["7.0", "7.5", "8.0", "8.5", "9.0", "9.5", "10.0", "10.5", "11.0", "11.5", "12.0", "12.5"]}
            brands={["Burton", "K2", "Rome", "Ride", "Ride", "Arbor"]}
            {...props}
          />)} />
        <Route path='/contacts' component={Contacts} />
      </BrowserRouter>
    );
  }

}


export default App;
