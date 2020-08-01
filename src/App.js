import React, { Component } from 'react';
import Footer from './Footer';
import Logo from './Logo';

import logo from './logo.svg';
import data from './data/data.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo logo={logo} />
          <Footer data={data} />
        </header>
      </div>
    );
  }
}

export default App;
