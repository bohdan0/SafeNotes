import { hashHistory } from 'react-router';
import React from 'react';

const Sidebar = ({ logout }) => (
  <div>
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img src="https://www.dropbox.com/s/68ohcpzvzc3c26w/1484384030_Vector-icons_39.png?raw=1"
              alt="Logo" 
              className="logo"/>

        <img className='sidebar-btn side-new'
              value='new_note'
              onClick={ () => console.log('coming soon') }
              src='https://www.dropbox.com/s/oknhbq0hezhgcv1/plus%20%281%29.svg?raw=1'/>
      </div>

      <ul className='nav'>
        <li className='sidebar-btn'>
          <img className='side-notes'
                onClick={ () => hashHistory.push(`/home/notebooks/all/notes/all`) }
                src='https://www.dropbox.com/s/y8vier7wdrkhznz/document-with-text-lines-.png?raw=1'/>
        </li>

        <li className='sidebar-btn'>
          <img className='side-notebooks'
                alt='notebooks'
                onClick={ () => hashHistory.push(`/home/notebooks/all`) } 
                src='https://www.dropbox.com/s/pm1zj16cibldspl/book-with-bookmarker.png?raw=1'/>
        </li>

        <li className='sidebar-btn'>
          <img className='side-tags'
                src='https://www.dropbox.com/s/bik2y2v7tt9l88y/clothes-tag.png?raw=1'
                alt='tags'
                onClick={ () => hashHistory.push(`/home/tags/all`) }/>
        </li>
      </ul>

      <img className='sidebar-btn side-logout'
            onClick={ logout }
            src="https://www.dropbox.com/s/skt2svisd0gdzf5/circular-power-on-button.png?raw=1" 
            alt="Log Out"/>
    </div>
  </div>
);


export default Sidebar;
