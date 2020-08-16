import React from 'react';
import HomeActionPageFooter from './HomeActionPageFooter';
import { Link } from 'react-router-dom';
import './HomeActionPage.css';

function HomeActionPage ({ latestSlug }) {
  return (
    <>
      <div className='action-buttons-container'>
        <Link to={`/${latestSlug}`}>
          <button className='action-button' type='button'>Latest</button>
        </Link>
        <Link to='/releases'>
          <button className='action-button' type='button'>All Releases</button>
        </Link>
      </div>
      <HomeActionPageFooter />
    </>
  );
}

export default HomeActionPage;
