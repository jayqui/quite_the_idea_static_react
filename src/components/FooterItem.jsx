import React from 'react';

const FooterItem = ({ datum }) => (
  <li className="music-links-li" key={datum.className}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`music-link ${datum.className}`}
      href={datum.href}
    >
      <img
        src={datum.logo}
        title={datum.title}
        alt={datum.alt}
      />
    </a>
  </li>
)

export default FooterItem;
