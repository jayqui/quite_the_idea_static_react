import React from 'react';
import { Link } from 'react-router-dom';

function ActionButtons ({ latestSlug }) {
  return (
    <div className='action-buttons-container'>
      <Link to={`/${latestSlug}`}>
        <button className='action-button' type='button'>Latest</button>
      </Link>
      <Link to='/releases'>
        <button className='action-button' type='button'>All Releases</button>
      </Link>
    </div>
  );
}

export default ActionButtons;
