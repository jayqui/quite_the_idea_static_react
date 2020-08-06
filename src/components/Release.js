import React from 'react';
import platforms from '../data/platforms.js';
import './Release.css';

function Release({ release }) {
  return (
    <div className='Release-container'>
      <img className='Release-image' src={release.image} alt={release.title} />

      {release.spotifyEmbedUrl && <div className='Release-embed-container'>
        <iframe
          title='foo'
          src={release.spotifyEmbedUrl} seamless>
            <a href={release.platformUrls.bandcamp}>
              What Would Make Us Truly Great? by Quite the idea
            </a>
        </iframe>
      </div>}

      <div className='Release-platform-links-container'>
        {Object.keys(release.platformUrls).map((platformName) => {
          const platform = platforms[platformName];
          const songUrl = release.platformUrls[platformName];

          if (!songUrl) { return null; }
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={songUrl}
            >
              <img
                className='Release-platform-icon'
                key={platform.alt}
                src={platform.logo}
                alt={platform.alt}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Release;
