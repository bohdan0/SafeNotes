import React from 'react';
import { Link } from 'react-router';

const TagHeader = ({ amount }) => {

  return (
    <div className='tags-header'>
      <h1>TAGS</h1>

      <Link to='/new/tag'>
        <img src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/add-tag_qo0tmv.png" 
             alt="new_tag"/>
      </Link>
    </div>
  );
};

export default TagHeader;