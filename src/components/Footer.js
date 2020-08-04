import React from 'react';
import FooterItem from './FooterItem';
import platforms from '../data/platforms.js';

import './Footer.css';

function Footer() {
  return (
    <div className="platforms-links-container">
      <ul className="platforms-links-ul">
        {platforms.map(platform => <FooterItem key={platform.id} platform={platform} />)}
      </ul>
    </div>
  );
}

export default Footer;
