import React from 'react';

const NotebookIndexItem = ({ notebook, amount }) => {

  return (
    <div className='notebook-item'>
      <h1>{ notebook.title }</h1>
      <span>{ amount } notes</span>
    </div>
  );
};

export default NotebookIndexItem;