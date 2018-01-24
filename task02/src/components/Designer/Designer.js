import React from 'react';
import './Designer.css';

const designer = () => {
  return(
    <div className='Designer'>
      <div className="UserPict">
        <img alt="username" src="https://randomuser.me/api/portraits/men/48.jpg"/>
      </div>
      <div className='UserInfo'>
        <h4 className='DesignerUsername'>Username</h4>
        <h5 className='DesignerLocation'>Location</h5>
        <p className='DesignerDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae egestas neque.</p>
        <div className='DesignerIcons'>
          <div>
          <i class="fas fa-plus fa-2x"></i>
          <i class="fas fa-envelope fa-2x"></i>
          </div>
          <div >
            <p className='followersNumber'>23,536</p>
            <p className='followers'>followers</p>
          </div>
        </div>
        <p className='DesignerDesc'>Fusce nec auctor nisl, eget accumsan est. Mauris vitae dolor orci.</p>
      </div>
      <div className='DesignerGallery'>
        <div className='DesignerSinglePict'>
          <img alt='img01' src='https://unsplash.it/512?image=90'/>
        </div>
{/*         
        <img alt='img02' src='https://unsplash.it/512?image=90'/>
        <img alt='img03' src='https://unsplash.it/512?image=90'/> */}
      </div>
    </div>
  )
};

export default designer;