import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="logo-container">
            <img class="logo" src={logo} />
          </div>
          <div class="music-links-container">
            <ul class="music-links-ul">
              {data.map(datum =>
                <li class="music-links-li">
                  <a
                    target="_blank"
                    className={`music-link ${datum.className}`}
                    href={datum.href}
                  >
                    <img
                      // src={datum.src}
                      // src={spotify}
                      src={datum.logo}
                      title={datum.title}
                      alt={datum.alt}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
