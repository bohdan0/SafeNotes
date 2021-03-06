import React from 'react';
import { hashHistory } from 'react-router';

const TagIndexItem = ({ tag, notes }) => {

  const handleClick = () => (
    hashHistory.push(`/home/tags/${ tag.id }/notes/all`)
  );

  return (
    <div className='tag-item'
         onClick={ handleClick }>
      <p>{ tag.name }</p>
      <span>{ notes }</span>
    </div>
  );
};

export default TagIndexItem;