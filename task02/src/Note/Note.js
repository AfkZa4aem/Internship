import React from 'react';
import './Note.css';

const note = () => {
  return (
    <div className="Note">
      <p className="noteParagraph">
        <strong>Hiring Designers? </strong> 
        Scout gives you unlimited access to the best talent. Find, Save, and message designers.
        <button className="noteButton">Learn more</button>
      </p>
    </div>
  )
};

export default note;