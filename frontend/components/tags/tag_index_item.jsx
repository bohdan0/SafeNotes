import React from 'react';

const TagIndexItem = ({ tag, notes }) => {

  return (
    <div className='tag-item'>
      <span>{ tag.name }</span>
      <span>{ notes }</span>
    </div>
  );
};

export default TagIndexItem;