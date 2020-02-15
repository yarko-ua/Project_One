import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const categories = ['snowboards', 'bindings', 'boots'];
  return (
    <>
      <Header categories={categories} />
      <Main />
    </>
  );
}

export default App;
