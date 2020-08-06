import React from 'react';

const FooterItem = ({ platform }) => (
  <li className="platform-link-li" key={platform.alt}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`music-link-${platform.alt}`}
      href={platform.href}
    >
      <img
        src={platform.logo}
        title={platform.title}
        alt={platform.alt}
      />
    </a>
  </li>
)

export default FooterItem;
