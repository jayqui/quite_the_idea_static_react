import React from 'react';
import platforms from '../data/platforms.js';

function ReleasePlatformLinks ({ release }) {
  return (
      <div className='Release-platform-links-container'>
        {Object.keys(release.platformUrls).map((platformName) => {
          const platform = platforms[platformName];
          const songUrl = release.platformUrls[platformName];

          if (!songUrl) { return null; }
          return (
            <a
              key={songUrl}
              target="_blank"
              rel="noopener noreferrer"
              href={songUrl}
            >
              <img
                className='Release-platform-icon'
                src={platform.logo}
                alt={platform.alt}
              />
            </a>
          )
        })}
      </div>
  );
}
export default ReleasePlatformLinks;
