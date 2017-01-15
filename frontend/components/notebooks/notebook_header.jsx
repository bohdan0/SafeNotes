import React from 'react';
import { Link } from 'react-router';

const NotebookHeader = () => {

  return (
    <div className='notebooks-header'>
      <h1>NOTEBOOKS</h1>

      <Link to='/new/notebook'>
        <img src="https://www.dropbox.com/s/mm205pn7ekzzev3/1484450978_editor-notebook-add-new-outline-stroke.png?raw=1" 
             alt="new_notebook"/>
      </Link>
    </div>
  );
};

export default NotebookHeader;