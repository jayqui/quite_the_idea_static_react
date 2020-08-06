import React from 'react';
import { Link } from 'react-router-dom';
import releases from '../data/releases.js';
import './Releases.css';

function Releases () {
  const releasesInReverse = Array.from(releases).reverse();
  return (
    <div className='releases-table'>
      {releasesInReverse.map((release) => {
        return (
          <React.Fragment key={release.id}>
            <div className='releases-table-cell releases-table-cell-year'>
              <Link to={`${release.slug}`}>
                <img className='release-mini-image' src={release.image} alt={release.title} />
              </Link>
            </div>
            <div className='releases-table-cell releases-table-cell-title'>
              <Link to={`${release.slug}`}>
                <button>
                  {`${release.title} (${release.releaseDate.slice(0,4)})`}
                </button>
              </Link>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Releases;
