import React from 'react';
import ReleaseBandcampEmbed from './ReleaseBandcampEmbed';
import ReleasePlatformLinks from './ReleasePlatformLinks';

import './Release.css';

function Release({ release }) {
  return (
    <div className='Release-container'>
      {release.bandcampEmbedUrl && <ReleaseBandcampEmbed release={release}/>}
      <ReleasePlatformLinks release={release} />
    </div>
  )
}

export default Release;
