import React from 'react';

import NoteIndexItem from './note_index_item';
import NoteHeader from './note_header';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes();
  }

  render() {
    const notes = this.props.notes;
    const notesId = Object.keys(notes);

    return (
      <div className='note-index'>
        <NoteHeader amount={notesId.length}/>
        <div className='notes'>
          {notesId.map(id => (
            <NoteIndexItem note={notes[id]} 
                           key={id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default NoteIndex;