import { Link } from 'react-router';
import React from 'react';

const Sidebar = ({ logout }) => (
  <div>
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img alt="Logo"
             src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/1484384030_Vector-icons_39_zzk1ov.png"
             className="logo"/>

        <Link to='/home/new/note'>
          <img className='sidebar-btn side-new'
               alt='new_note'
               src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/circular-plus-button_oiuvj4.png'
               data-toggle='tooltip' 
               title='NEW NOTE'
               />
        </Link>
      </div>

      <ul className='nav'>
        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all/notes/all'>
            <img className='side-notes'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/document-with-text-lines-_zktmln.png'
                 data-toggle='tooltip' 
                 title='NOTES' 
                 data-placement='right'/>
          </Link>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all'>
            <img className='side-notebooks'
                 alt='notebooks'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484797097/book-with-bookmarker_qdlxyq.png'
                 data-toggle='tooltip' 
                 title='NOTEBOOKS' 
                 data-placement='right'/>
          </Link>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/tags/all'>
            <img className='side-tags'
                 alt='tags'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/clothes-tag_p1qydq.png'
                 data-toggle='tooltip' 
                 title='TAGS' 
                 data-placement='right'/>
          </Link>
        </li>
      </ul>

      <img className='sidebar-btn side-logout'
            onClick={ logout }
            src="http://res.cloudinary.com/safenotes/image/upload/v1484796893/circular-power-on-button_xpm2sy.png" 
            alt="Log Out"
            data-toggle='tooltip' 
            title='LOGOUT' 
            data-placement='right'/>
    </div>
  </div>
);


export default Sidebar;
