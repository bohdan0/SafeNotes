import React from 'react';

const NoteHeader = ({ amount, headerName }) => (
  <div className='notes-header'>
    <h1>{ headerName || 'ALL NOTES' }</h1>
    <h4>{ amount } { amount === 1 ? 'note' : 'notes' }</h4>
  </div>
);

export default NoteHeader;