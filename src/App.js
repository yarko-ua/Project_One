import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Home/Home'
import Contacts from './components/Contacts/Contacts'
import { BrowserRouter, Route, } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './components/ShoppingCart/Cart';


class App extends Component {

  render() {
    // Вывод в консоль стора
    console.log(this.props);
    return (
      <BrowserRouter>
        <Header categories={['home', 'snowboards', 'bindings', 'boots', 'contacts']} />
        <Route exact path='/' component={Home} />
        <Route exact path='/snowboards'
          component={(props) => (<Main
            snowboard={{}}
            options={["145", "147", "149", "151", "152", "154", "155", "157", "160", "161"]}
            brands={["Burton", "K2", "LibTech", "NeverSummer", "Rome"]}
            {...props}
          />)} />
        <Route exact path='/bindings'
          component={(props) => (<Main
            binding={{}}
            options={["XS", "S", "M", "L", "XL"]}
            brands={["Burton", "K2", "Gnu", "Union", "Arbor", "Ride", "Rome"]}
            {...props}
          />)} />
        <Route exact path='/boots'
          component={(props) => (<Main
            boot={{}}
            options={["7.0", "7.5", "8.0", "8.5", "9.0", "9.5", "10.0", "10.5", "11.0", "11.5", "12.0", "12.5"]}
            brands={["Burton", "K2", "Rome", "Ride", "Ride", "Arbor"]}
            {...props}
          />)} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/cart' component={Cart} />
      </BrowserRouter>
    );
  }

}
const mapState = state => ({ ...state })

export default connect(mapState)(App);


