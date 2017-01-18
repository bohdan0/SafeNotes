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
        <span>{ moment(note.updated_at).fromNow() }</span>
        <p>{ body.textContent }</p>
      </div>

      <img src="https://www.dropbox.com/s/gm863mao8z0rnww/big-garbage-bin.png?raw=1" 
           alt="trash_can"
           className='trash-can'
           onClick={ action }/>
    </div>
  );
};

export default NoteIndexItem;