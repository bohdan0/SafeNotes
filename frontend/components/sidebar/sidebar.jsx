import { Link } from 'react-router';
import React from 'react';

const Sidebar = ({ logout }) => (
  <div>
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img src="https://www.dropbox.com/s/68ohcpzvzc3c26w/1484384030_Vector-icons_39.png?raw=1"
              alt="Logo" 
              className="logo"/>

        <Link to='/new/note'>
          <img className='sidebar-btn side-new'
               alt='new_note'
               src='https://www.dropbox.com/s/oknhbq0hezhgcv1/plus%20%281%29.svg?raw=1'/>
        </Link>
      </div>

      <ul className='nav'>
        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all/notes/all'>
            <img className='side-notes'
                 src='https://www.dropbox.com/s/y8vier7wdrkhznz/document-with-text-lines-.png?raw=1'/>
          </Link>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all'>
            <img className='side-notebooks'
                 alt='notebooks'
                 src='https://www.dropbox.com/s/pm1zj16cibldspl/book-with-bookmarker.png?raw=1'/>
          </Link>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/tags/all'>
            <img className='side-tags'
                 alt='tags'
                 src='https://www.dropbox.com/s/bik2y2v7tt9l88y/clothes-tag.png?raw=1'/>
          </Link>
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
