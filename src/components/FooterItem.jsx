import React from 'react';

const FooterItem = ({ platform }) => (
  <li className="platform-link-li" key={platform.className}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={platform.className}
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
