import React from 'react';
import FooterItem from './HomeActionPageFooterItem';
import platforms from '../data/platforms.js';

import './HomeActionPageFooter.css';

function Footer() {
  return (
    <div className="platforms-links-container">
      <ul className="platforms-links-ul">
        {Object.keys(platforms).map((platformName) => {
          const platform = platforms[platformName];
          return <FooterItem key={platform.id} platform={platform} />
        })}
      </ul>
    </div>
  );
}

export default Footer;
