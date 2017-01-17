import React from 'react';
import moment from 'moment';

const NoteIndexItem = ({ note, handleClick, deleteNote }) => {

  return (
    <div className='note-item'
         onClick={ handleClick(note) }>
      <div className='note-item-info'>
        <h1>{ note.title }</h1>
        <span>{ moment(note.updated_at).fromNow() }</span>
        <p>{ note.body }</p>
      </div>

      <img src="https://www.dropbox.com/s/gm863mao8z0rnww/big-garbage-bin.png?raw=1" 
           alt="trash_can"
           className='trash-can'
           onClick={ () => deleteNote(note.id) }/>
    </div>
  );
};

export default NoteIndexItem;