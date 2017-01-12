import React from 'react';

const NoteHeader = ({ amount }) => {

  return (
    <div className='notes-header'>
      <h1>NOTES</h1>
      <h4>{amount} notes</h4>
    </div>
  );
};

export default NoteHeader;