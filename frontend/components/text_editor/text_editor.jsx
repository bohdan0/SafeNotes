import { hashHistory } from 'react-router';
import ReactQuill from 'react-quill';
import merge from 'lodash/merge';
import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note || { id: null, 
                                 title: '', 
                                 body: '',
                                 tags: {},
                                 tag_ids: [],
                                 notebook_id: props.notebookId };

    this._buttonCallback = this._buttonCallback.bind(this);
    this._untagNote = this._untagNote.bind(this);
  }

  componentWillReceiveProps({ note }) {
    if (note) {
      // this.setListenerForTag(note);
      const { id, title, body, tags, tag_ids, notebook_id } = note;
      this.setState({ id, title, body, tags, tag_ids, notebook_id });
    }
  }

  autosave() {
    clearTimeout(this.timeout);
    const newNote = this.state;
    
    if (newNote.id) {
      this.timeout = setTimeout(() => this.props.updateNote(newNote), 500);
    } else if (newNote.body.length > 0 && newNote.title.length > 0 && newNote.notebook_id) {
      this.timeout = setTimeout(() => this.props.createNote(newNote)
        .then(res => {
          const { id, title, body, tags, tag_ids, notebook_id } = res.note;
          this.setState({ id, title, body, tags, tag_ids, notebook_id });
        }), 500);
    }
  }

  update(type) {
    return e => {
      const text = type === 'body' ? e : e.target.value;
      this.setState({ [type]: text, notebook_id: this.refs.notebookId.value }, () => this.autosave());
    };
  }

  setListenerForTag(note) {
    $("#newTag").off('keyup');
    $("#newTag").on('keyup', e => { 

      const tagName = e.target.value;
      if (e.keyCode === 13 && tagName.length > 0) {
        if (note.id) {
          this.props.tagNote(note.id, tagName)
            .then(() => $("#newTag").val(''))
            .fail(err => $("#newTag").val(''));
        } else {
          this.props.createTag(tagName)
            .then(tag => {
              this.setState({ tags: merge({}, this.state.tags, { [tag.id]: tag }),
                              tag_ids: [...this.state.tag_ids, tag.id] });
              $("#newTag").val('');
            })
            .fail(err => $("#newTag").val(''));
        }
      }
    });
  }

  renderButton() {
    if (hashHistory.getCurrentLocation().pathname === '/home/new/note') {
      return (
        <button type="button"
                className='done-button'
                onClick={ this._buttonCallback }>
          { this.state.id ? 'Done' : 'Cancel' }
        </button>
      );  
    } else {
      return null;
    }
  }

  _buttonCallback() {
    if (this.state.id) {
      hashHistory.push(`/home/notebooks/${ this.state.notebook_id }/notes/all`);
    } else {
      hashHistory.goBack();
    }
  }

  _untagNote(noteId, tagName) {
    return () => {
      this.props.untagNote(noteId, tagName);
    };
  }

  renderOptionMenu() {
    const note = this.state;

    if (note) {
      const tagIds = note.tag_ids;

      return (
        <div className='option'>
        { this.chooseNotebook() }
          
          <ul className='option-list'>
            { tagIds.map(tagId => (
                <li key={ tagId }
                    onClick={ this._untagNote(note.id, note.tags[tagId].name) }
                    className='tag-name'>
                  <span>{ note.tags[tagId].name }</span>
                </li>
            ))}
          </ul>

          <input type="text"
                 id='newTag'
                 placeholder='Add tag...'/>
        </div>
      );
    }
  }

  chooseNotebook() {
    const notebooks = this.props.notebooks;

    if (notebooks) {
      return (
        <div className='ql-toolbar'>
          <select className='editor-notebooks ql-picker'
                  ref='notebookId'
                  value={ this.props.notebookId }
                  onChange={ this.update('notebook_id') }>

            {Object.keys(notebooks).map(notebookId => (
              <option value={ notebookId }
                      key={ notebookId }>
                { notebooks[notebookId].title }
              </option>
            ))}
          </select>
        </div>
      );
    }
  }

  render() {
    this.setListenerForTag(this.state);

    return (
      <div className='text-editor'>
        <div className='editor-nav'>
          <input autoFocus
                className='title'
                value={ this.state.title }
                onChange={ this.update('title') }
                placeholder='Title your note...'/>

          { this.renderButton() }
        </div>

        { this.renderOptionMenu() }
       
        <ReactQuill className='text-area'
                    theme='snow'
                    value={ this.state.body }
                    onChange={ this.update('body') } />

      </div>
    );
  }
}

export default TextEditor;