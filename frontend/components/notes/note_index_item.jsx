import React from 'react';

const NoteIndexItem = ({ note, handleClick }) => {

  return (
    <div className='note-item'
         onClick={ handleClick(note) }>

      <h1>{note.title}</h1>
      <span>LAST UPDATE</span>
      <p>{note.body}</p>
    </div>
  );
};

export default NoteIndexItem;