import React from 'react'

function ReleaseBandcampEmbed({ release }) {
  const isSmallishMobile = window.innerWidth > 380
  const width = isSmallishMobile ? 350 : 300;
  const height = isSmallishMobile ? 442 : 413;

  return (
    <div className='Release-embed-container'>
      <iframe
        height={height}
        width={width}
        title='bandcampEmbed'
        src={release.bandcampEmbedUrl}
        seamless>
      </iframe>
    </div>
  )
}

export default ReleaseBandcampEmbed

