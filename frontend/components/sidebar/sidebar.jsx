import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router';
import React from 'react';

const Sidebar = ({ logout }) => (
  <div>
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img alt="Logo"
             src="http://res.cloudinary.com/safenotes/image/upload/v1485069188/16237507_10206188397148119_1966603325_n_te958y.png"
             className="logo"/>

        <Link to='/home/new/note'>
          <img className='sidebar-btn side-new'
               data-tip='React-tooltip'
               data-for='new_note'
               alt='new_note'
               src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/circular-plus-button_oiuvj4.png'/>
        </Link>

        <ReactTooltip id='new_note' 
                      place='right' 
                      type='dark' 
                      effect='solid' 
                      offset={ { right: 11, bottom: 3 } }>
          <span>NEW NOTE</span>
        </ReactTooltip>
      </div>

      <ul className='nav'>
        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all/notes/all'>
            <img className='side-notes'
                 data-tip='React-tooltip'
                 data-for='notes'
                 alt='notes'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/document-with-text-lines-_zktmln.png'/>
          </Link>

          <ReactTooltip id='notes' 
                        place='right' 
                        type='dark' 
                        effect='solid'>
            <span>NOTES</span>
          </ReactTooltip>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/notebooks/all'>
            <img className='side-notebooks'
                 data-tip='React-tooltip'
                 data-for='notebooks'
                 alt='notebooks'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484797097/book-with-bookmarker_qdlxyq.png'/>
          </Link>

          <ReactTooltip id='notebooks' 
                        place='right' 
                        type='dark' 
                        effect='solid'>
            <span>NOTEBOOKS</span>
          </ReactTooltip>
        </li>

        <li className='sidebar-btn'>
          <Link to='/home/tags/all'>
            <img className='side-tags'
                 data-tip='React-tooltip'
                 data-for='tags'
                 alt='tags'
                 src='http://res.cloudinary.com/safenotes/image/upload/v1484796893/clothes-tag_p1qydq.png'/>
          </Link>

          <ReactTooltip id='tags' 
                        place='right' 
                        type='dark' 
                        effect='solid'>
            <span>TAGS</span>
          </ReactTooltip>
        </li>
      </ul>

      <img className='sidebar-btn side-logout'
           data-tip='React-tooltip'
           data-for='logout'
           onClick={ logout }
           alt="log_out"
           src="http://res.cloudinary.com/safenotes/image/upload/v1484796893/circular-power-on-button_xpm2sy.png"/>

      <ReactTooltip id='logout' 
                    place='right' 
                    type='dark' 
                    effect='solid'>
        <span>LOG OUT</span>
      </ReactTooltip>
    </div>
  </div>
);


export default Sidebar;
