import React from 'react';
import { hashHistory } from 'react-router';

const NotebookIndexItem = ({ notebook, amount, deleteNotebook }) => {

  const handleClick = (e) => {
    if (e.target.alt) {
      hashHistory.push(`/home/notebooks/all`);
    } else {
      hashHistory.push(`/home/notebooks/${ notebook.id }/notes/all`);
    }
  };

  return (
    <div className='notebook-item'
         onClick={ handleClick }>
      <div className='notebook-item-info'>
        <h1>{ notebook.title }</h1>
        <span>{ amount } { amount === 1 ? 'note' : 'notes' }</span>
      </div>

      <img src="https://www.dropbox.com/s/gm863mao8z0rnww/big-garbage-bin.png?raw=1" 
           alt="trash_can"
           className='trash-can'
           onClick={ () => deleteNotebook(notebook.id) }/>
    </div>
  );
};

export default NotebookIndexItem;