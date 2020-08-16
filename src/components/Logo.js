import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/quite_the_idea_stacked_white.png'

import './Logo.css';

const Logo = () => (
  <div className="logo-container">
    <Link to='/'>
      <img className="logo" src={logo} alt="Quite the idea" />
    </Link>
  </div>
)

export default Logo;


