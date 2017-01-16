import React from 'react';

const NoteHeader = ({ amount }) => (
  <div className='notes-header'>
    <h1>NOTES</h1>
    <h4>{ amount } { amount === 1 ? 'note' : 'notes' }</h4>
  </div>
);

export default NoteHeader;