import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Releases from './components/Releases';
import ActionButtons from './components/ActionButtons';

import releases from './data/releases.js';

import './App.css';

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

function App() {
  const latestSlug = 'what-would-make-us-truly-great';

  return (
    <div className="App">
      <main className="App-main">
        <Logo />

        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <Switch>
            <Route exact path='/'>
              <ActionButtons latestSlug={latestSlug} />
            </Route>
            <Route exact path='/releases' component={Releases}></Route>
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

export default App;
