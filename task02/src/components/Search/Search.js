import React from 'react';
import './Search.css';

const search = () => {
  return (
    <div className="Search">
      <div className="rightPart">
        <select>
          <option>Designers&amp;Teams</option>
          <option>Designers</option>
          <option>Teams</option>
        </select>
      </div>
      <div className="leftPart">
        <ol>
          <li>Sort:</li>
          <li className="sortType">Trending</li>
          <li>&middot;</li>
          <li className="followers">Followers</li>
        </ol>
      </div>
    </div>
  )
};

export default search;