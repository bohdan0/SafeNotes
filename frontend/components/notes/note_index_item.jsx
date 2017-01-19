import React from 'react';
import moment from 'moment';

const NoteIndexItem = ({ note, handleClick, deleteNote }) => {
  const body = document.createElement('p');
  body.innerHTML = note.body;

  const action = e => {
    if (e.target.alt) {
      deleteNote(note.id);
    } else {
      handleClick(note);
    }
  };

  return (
    <div className='note-item'
         onClick={ action }>
      <div className='note-item-info'>
        <h1>{ note.title }</h1>
        <span>LAST UPDATE: { moment(note.updated_at).fromNow().toLocaleUpperCase() }</span>
        <p>{ body.textContent }</p>
      </div>

      <img src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/big-garbage-bin_tym3np.png" 
           alt="trash_can"
           className='trash-can'
           onClick={ action }/>
    </div>
  );
};

export default NoteIndexItem;