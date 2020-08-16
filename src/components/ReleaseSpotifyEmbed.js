import React from 'react';

function ReleaseSpotifyEmbed ({ release }) {
  return (
    <div className='Release-embed-container'>
      <iframe
        title='spotifyEmbed'
        src={release.spotifyEmbedUrl} seamless>
      </iframe>
    </div>
  );
}

export default ReleaseSpotifyEmbed;
