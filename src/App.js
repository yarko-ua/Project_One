import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
  }
  render() {
    return (
      <>
        <Header categories={['all', 'snowboards', 'bindings', 'boots', 'contacts']} />
        <Main />
      </>
    );
  }

}

export default App;
