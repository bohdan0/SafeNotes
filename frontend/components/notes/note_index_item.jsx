import React from 'react';

const NoteIndexItem = ({ note }) => {

  return (
    <div className='note-item'>
      <h1>{note.title}</h1>
      <span>LAST UPDATE</span>
      <p>{note.body}</p>
    </div>
  );
};

export default NoteIndexItem;