import { Link } from 'react-router';
import React from 'react';

const Sidebar = ({ logout }) => (
  <div>
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/1484384030_Vector-icons_39_zzk1ov.png"
              alt="Logo" 
              className="logo"/>

        <Link to='/home/new/note'>
          <img className='sidebar-btn side-new'
               alt='new_note'
               src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/circular-plus-button_oiuvj4.png'/>
        </Link>
      </div>

      <ul className='nav'>
        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all/notes/all'>
            <img className='side-notes'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/document-with-text-lines-_zktmln.png'/>
          </Link>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all'>
            <img className='side-notebooks'
                 alt='notebooks'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484797097/book-with-bookmarker_qdlxyq.png'/>
          </Link>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/tags/all'>
            <img className='side-tags'
                 alt='tags'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/clothes-tag_p1qydq.png'/>
          </Link>
        </li>
      </ul>

      <img className='sidebar-btn side-logout'
            onClick={ logout }
            src="http://res.cloudinary.com/safenotes/image/upload/v1484796893/circular-power-on-button_xpm2sy.png" 
            alt="Log Out"/>
    </div>
  </div>
);


export default Sidebar;
