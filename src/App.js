import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Logo from './Logo';

import logo from './logo.svg';
import platformsData from './data/platformsData.js';

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
              <Route path={`${process.env.PUBLIC_URL}/bar`}>
                bar
              </Route>
              <Route exact path={`${process.env.PUBLIC_URL}/`}></Route>
              <Route component={NoMatchPage} />
            </Switch>
          </BrowserRouter>
          <Footer data={platformsData} />
        </header>
      </div>
    );
  }
}

export default App;
