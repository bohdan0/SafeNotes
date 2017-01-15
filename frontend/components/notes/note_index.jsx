import React from 'react';

import TextEditorContainer from '../text_editor/text_editor_container';
import NoteIndexItem from './note_index_item';
import NoteHeader from './note_header';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentNote: null };

    this.updateCurrentNote = this.updateCurrentNote.bind(this);
  }

  updateCurrentNote(currentNote) {
    return (e) => (
      this.setState({ currentNote })
    );
  }

  componentWillReceiveProps(newProps) {
    const notes = newProps.notes;
    const notesId = Object.keys(notes);
    const currentNote = notes[notesId[0]];

    this.setState({ currentNote });
  }

  render() {
    const notes = this.props.notes;
    const notesId = Object.keys(notes);

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

        <TextEditorContainer note={ this.state.currentNote } />
      </div>
    );
  }
}

export default NoteIndex;