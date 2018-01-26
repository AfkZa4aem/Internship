import React from 'react';
import SingleGallery from '../SingleGallery/SingleGallery'
import './Designer.css';

const designer = (props) => {
  return(
    <div className='Designer'>
      <div className="UserPict">
        <img alt={props.name} src={props.img}/>
      </div>
      <div className='UserInfo'>
        <h4 className='DesignerUsername'>{props.name}</h4>
        <h5 className='DesignerLocation'>Location</h5>
        <p className='DesignerDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae egestas neque.</p>
        <div className='DesignerIcons'>
          <div>
          <i className="fas fa-plus fa-2x"></i>
          <a href={"mailto:" + props.email}>
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          </div>
          <div>
            <p className='followersNumber'>{props.num}</p>
            <p className='followers'>followers</p>
          </div>
        </div>
        <p className='DesignerDesc'>Fusce nec auctor nisl, eget accumsan est. Mauris vitae dolor orci.</p>
      </div>
      <SingleGallery id={props.id}/>
    </div>
  )
};

export default designer;