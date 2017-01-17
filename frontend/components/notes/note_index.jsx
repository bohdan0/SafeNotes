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
      if (this.props.params.notebookId) {
        hashHistory.push(`/home/notebooks/${ this.props.params.notebookId }/notes/${ currentNote.id }`);
      } else {
        hashHistory.push(`/home/tags/${ this.props.params.tagId }/notes/${ currentNote.id }`);
      }
    };
  }

  renderTextEditor(currentNote) {
    if (this.props.params.notebookId || currentNote) {
      return (
        <TextEditorContainer note={ currentNote }
                             notebookId={ this.props.params.notebookId } />
      );
    } else {
      return null;
    }
  }

  render() {
    const notes = this.props.notes;
    const notesId = Object.keys(notes);
    const currentNote = notes[this.props.params.noteId] || notes[notesId[0]];

    return (
      <div className='main-page'>
        <div className='note-index'>
          <NoteHeader amount={ notesId.length } />

          <div className='notes'>
            {notesId.map(id => (
              <NoteIndexItem note={ notes[id] } 
                             key={ id }
                             handleClick={ this.updateCurrentNote }
                             deleteNote={ this.props.deleteNote }/>
            ))}
          </div>
        </div>
        { this.renderTextEditor(currentNote) }
      </div>
    );
  }
}

export default NoteIndex;