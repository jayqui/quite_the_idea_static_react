import React from 'react';
import goFundMeLogo from '../img/gofundme_widget_logo.png';

function ReleaseGoFundMeEmbed({ release }) {
  return (
    <div className='Release-fundraiser-embed-container'>
      <iframe
        title='goFundMeWidget'
        height="85px"
        width="310px"
        src={release.goFundMeEmbedUrl}
        type="text/html">
      </iframe>
      <img className='Release-fundraiser-logo' src={goFundMeLogo} alt='GoFundMe logo' />
    </div>
  );
}

export default ReleaseGoFundMeEmbed;
