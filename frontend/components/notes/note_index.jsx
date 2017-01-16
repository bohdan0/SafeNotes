import React from 'react';
import { hashHistory } from 'react-router';

import TextEditorContainer from '../text_editor/text_editor_container';
import NoteIndexItem from './note_index_item';
import NoteHeader from './note_header';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.updateCurrentNote = this.updateCurrentNote.bind(this);
  }

  updateCurrentNote(currentNote) {
    return (e) => {
      hashHistory.push(`/home/notebooks/${ this.props.params.notebookId }/notes/${ currentNote.id }`);
    };
  }

  render() {
    const notes = this.props.notes;
    const notesId = Object.keys(notes);
    const currentNote = this.props.notes[this.props.params.noteId] || notes[notesId[0]];

    return (
      <div className='main-page'>
        <div className='note-index'>
          <NoteHeader amount={ notesId.length } />

          <div className='notes'>
            {notesId.map(id => (
              <NoteIndexItem note={ notes[id] } 
                             key={ id }
                             handleClick={ this.updateCurrentNote }/>
            ))}
          </div>
        </div>

        <TextEditorContainer note={ currentNote || { id: null, title: '', body: '' } } />
      </div>
    );
  }
}

export default NoteIndex;