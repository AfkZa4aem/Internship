import React from 'react';
import './Header.css'

const header = () => {
  return(
    <div className='Header'>
      <div className='LeftSide'>
        <ul>
          <li className="logo">Dribbble</li>
          <li>Shots</li>
          <li>Designers</li>
          <li>Blog</li>
          <li>Podcast</li>
          <li>Meetups</li>
          <li>Jobs</li>
          <li>Hiring</li>
          <li className="dots">...</li>
        </ul>
      </div>
      <div className='RightSide'>
        <ul>
          <li>Sign up</li>
          <li>Sign in</li>
          <li><input type='text' className="navSearch" placeholder="Search"/></li>
        </ul>
      </div>
    </div>
  )
};

export default header;