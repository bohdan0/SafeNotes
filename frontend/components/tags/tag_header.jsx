import React from 'react';
import { Link } from 'react-router';
import ReactTooltip from 'react-tooltip';

const TagHeader = ({ amount }) => {

  return (
    <div className='tags-header'>
      <h1>TAGS</h1>

      <Link to='/new/tag'>
        <img src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/add-tag_qo0tmv.png" 
             alt="new_tag"
             data-tip='React-tooltip'/>
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

export default TagHeader;