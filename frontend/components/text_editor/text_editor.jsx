import { hashHistory } from 'react-router';
import ReactTooltip from 'react-tooltip';
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
    this._tagNote = this._tagNote.bind(this);
    this._untagNote = this._untagNote.bind(this);
  }

  componentWillReceiveProps({ note }) {
    if (note) {
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
          const { id, title, body, notebook_id } = res.note;
          this.setState({ id, title, body, notebook_id });
        }), 500);
    }
  }

  update(type) {
    return e => {
      const text = type === 'body' ? e : e.target.value;
      this.setState({ [type]: text }, () => this.autosave());
    };
  }

  _tagNote(e) {
      const tagName = e.target.value;
      const note = this.state;
      e.persist();
      const resetInput = () => {
        e.target.value = '';
      };
      
      if (e.keyCode === 13 && tagName.length > 0) {
        if (note.id) {
          this.props.tagNote(note.id, tagName)
            .then(action => {
              const tag = action.data.tag;

              this.setState({ tags: merge({}, this.state.tags, { [tag.id]: tag }) });
              resetInput();
            })
            .fail(err => console.log(err.responseJSON));
        } else {
          this.props.createTag(tagName)
            .then(tag => {
              this.setState({ tags: merge({}, this.state.tags, { [tag.id]: tag }),
                              tag_ids: [...this.state.tag_ids, tag.id] } );
              resetInput();
            })
            .fail(err => console.log(err.responseJSON));
        }
      }
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

  _untagNote(noteId, tagName, tagId) {
    return () => {
      if (noteId) {
        this.props.untagNote(noteId, tagName)
          .then(action => {
            var tags = merge({}, this.state.tags);
            delete tags[tagId];

            var tag_ids = this.state.tag_ids.slice();
            tag_ids.map((id, pos) => {
              if (id == tagId) tag_ids.splice(pos, 1);
            });

            this.setState({ tags: merge({}, tags), tag_ids});
          });
      } else {

        var tags = merge({}, this.state.tags);
        delete tags[tagId];

        var tag_ids = this.state.tag_ids.slice();
        tag_ids.map((id, pos) => {
          if (id == tagId) tag_ids.splice(pos, 1);
        });

        this.setState({ tags: merge({}, tags), tag_ids});
      }
    };
  }

  renderOptionMenu() {
    const note = this.state;

    if (note) {
      const tagIds = Object.keys(note.tags);

      return (
        <div className='option'>
        { this.chooseNotebook() }
          
          <ul className='option-list'>
            { tagIds.map(tagId => (
              <div key={ tagId }>
                <li onClick={ this._untagNote(note.id, note.tags[tagId].name, tagId) }
                    className='tag-name'
                    data-tip='React-tooltip'>
                  <span>{ note.tags[tagId].name }</span>
                </li>

                <ReactTooltip place='top' 
                              type='dark' 
                              effect='solid'>
                  <span>REMOVE</span>
                </ReactTooltip>

              </div>
            ))}
          </ul>

          <input type="text"
                 id='newTag'
                 onKeyUp={ this._tagNote }
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
                  value={ this.state.notebook_id || undefined }
                  onChange={ this.update('notebook_id') }>
              { this.state.notebook_id ? '' : <option value='undefined'>Choose Notebook</option> }
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