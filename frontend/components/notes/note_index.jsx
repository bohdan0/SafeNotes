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
    if (this.props.params.notebookId) {
      hashHistory.push(`/home/notebooks/${ this.props.params.notebookId }/notes/${ currentNote.id }`);
    } else {
      hashHistory.push(`/home/tags/${ this.props.params.tagId }/notes/${ currentNote.id }`);
    }
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

  sortNotes(notes) {
    return Object.values(notes).sort((note1, note2) => {
      if (note1.updated_at > note2.updated_at) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  render() {
    const notes = this.props.notes;
    const sortedNotes = this.sortNotes(notes);
    const currentNote = notes[this.props.params.noteId] || sortedNotes[0];

    return (
      <div className='main-page'>
        <div className='note-index'>
          <NoteHeader amount={ sortedNotes.length } 
                      headerName={ this.props.headerName }/>

          <div className='notes'>
            {sortedNotes.map(note => (
              <NoteIndexItem note={ note } 
                             key={ note.id }
                             current={ currentNote === note }
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