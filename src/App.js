import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Logo from './components/Logo';

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
        <main className="App-main">
          <Logo />

          <div className='action-buttons-container'>
            <button className='action-button' type='button'>Latest</button>
            <button className='action-button' type='button'>All Releases</button>
          </div>

          <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
            <Switch>
              <Route exact path='/'></Route>
              {releases.map((release) => (
                <Route exact
                key={release.id}
                path={`/${release.slug}`}>
                  {release.slug}
                </Route>
              ))}
              <Route component={NoMatchPage} />
            </Switch>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
