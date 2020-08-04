import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Logo from './Logo';

import logo from './logo.svg';
import platforms from './data/platforms.js';
import releases from './data/releases.js';

import './App.css';

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo logo={logo} />
          <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
            <Switch>
              <Route exact path='/'></Route>
              {releases.map((release) => (
                <Route exact key={release.id} path={`/${release.slug}`}></Route>
              ))}
              <Route component={NoMatchPage} />
            </Switch>
          </BrowserRouter>
          <Footer data={platforms} />
        </header>
      </div>
    );
  }
}

export default App;
