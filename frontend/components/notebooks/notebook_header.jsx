import React from 'react';
import { Link } from 'react-router';

const NotebookHeader = () => {

  return (
    <div className='notebooks-header'>
      <h1>NOTEBOOKS</h1>

      <Link to='/new/notebook'>
        <img src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/1484450978_editor-notebook-add-new-outline-stroke_zmkbx8.png" 
             alt="new_notebook"/>
      </Link>
    </div>
  );
};

export default NotebookHeader;