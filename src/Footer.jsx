import React from 'react';
import FooterItem from './FooterItem';

const Footer = ({ data }) => (
  <div className="music-links-container">
    <ul className="music-links-ul">
      {data.map(datum => <FooterItem datum={datum} />)}
    </ul>
  </div>
)

export default Footer;