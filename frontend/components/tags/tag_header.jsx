import React from 'react';
import { Link } from 'react-router';

const TagHeader = ({ amount }) => {

  return (
    <div className='tags-header'>
      <h1>TAGS</h1>

      <Link to='/new/tag'>
        <img src="https://www.dropbox.com/s/oiczjp03bwyq9tf/add-tag.png?raw=1" 
             alt="new_tag"/>
      </Link>
    </div>
  );
};

export default TagHeader;