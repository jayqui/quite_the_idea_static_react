import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';
import Releases from './components/Releases';
import Release from './components/Release';
import HomeActionPage from './components/HomeActionPage';

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
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Link to='/'><Logo /></Link>

        <Switch>
          <Route exact path='/'><HomeActionPage latestSlug={latestSlug} /></Route>
          <Route exact path='/releases'>{Releases}</Route>

          {releases.map((release) => (
            <Route exact
              key={release.id}
              path={`/${release.slug}`}
            >
              <Release release={release} />
            </Route>
          ))}

          <Route component={NoMatchPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
