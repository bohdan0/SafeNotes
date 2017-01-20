import React from 'react';
import { Link } from 'react-router';
import ReactTooltip from 'react-tooltip';

const NotebookHeader = () => {

  return (
    <div className='notebooks-header'>
      <h1>NOTEBOOKS</h1>

      <Link to='/new/notebook'>
        <img alt="new_notebook"
             data-tip='React-tooltip'
             src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/1484450978_editor-notebook-add-new-outline-stroke_zmkbx8.png"/>
      </Link>

      <ReactTooltip place='right' 
                    type='dark' 
                    effect='solid'
                    offset={ { right: 10 } }>
        <span>NEW TAG</span>
      </ReactTooltip>
    </div>
  );
};

export default NotebookHeader;