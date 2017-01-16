import React from 'react';
import { hashHistory } from 'react-router';

const NotebookIndexItem = ({ notebook, amount }) => {

  const handleClick = () => (
    hashHistory.push(`/home/notebooks/${ notebook.id }/notes/all`)
  );

  return (
    <div className='notebook-item'
         onClick={ handleClick }>
      <h1>{ notebook.title }</h1>
      <span>{ amount } { amount === 1 ? 'note' : 'notes' }</span>
    </div>
  );
};

export default NotebookIndexItem;