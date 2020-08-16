import React from 'react';
import ReleaseSpotifyEmbed from './ReleaseSpotifyEmbed';
import ReleaseGoFundMeEmbed from './ReleaseGoFundMeEmbed';
import ReleasePlatformLinks from './ReleasePlatformLinks';

import './Release.css';

function Release({ release }) {
  return (
    <div className='Release-container'>
      <img className='Release-image' src={release.image} alt={release.title} />
      {release.spotifyEmbedUrl && <ReleaseSpotifyEmbed release={release}/>}
      {release.goFundMeEmbedUrl && <ReleaseGoFundMeEmbed release={release} />}
      <ReleasePlatformLinks release={release} />
    </div>
  )
}

export default Release;
