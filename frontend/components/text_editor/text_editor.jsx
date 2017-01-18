import ReactQuill from 'react-quill';
import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note || { id: null, 
                                 title: '', 
                                 body: '',
                                 notebook_id: props.notebookId };

    this.update = this.update.bind(this);
    this.tagNote = this.tagNote.bind(this);
  }

  componentWillReceiveProps({ note }) {
    if (note) {
      const { id, title, body, notebook_id } = note;
      this.setState({ id, title, body, notebook_id });
    }
  }

  autosave() {
    clearTimeout(this.timeout);

    if (this.state.id) {
      this.timeout = setTimeout(() => this.props.updateNote(this.state), 500);
    } else if (this.state.body.length > 0 && this.state.title.length > 0) {
      this.timeout = setTimeout(() => this.props.createNote(this.state)
        .then(note => this.setState({ note })), 500);
    }
  }

  update(type) {
    if (type === 'body') {
      return text => {
        this.setState({ [type]: text }, this.autosave());
      };
    } else {
      return e => {
        this.setState({ [type]: e.target.value }, this.autosave());
      };
    }
  }

  tagNote() {
    return e => {
      e.preventDeafult();
      console.log('coming soon');
    };
  }

  renderOptionMenu() {
    if (this.props.note) {
      const note = this.props.note;
      const tagIds = note.tag_ids;

    $("#newTag").on('keyup', e => { 
      const noteId = this.props.note.id;
      const tagName = e.target.value;

      if (e.keyCode == 13 && tagName.length > 0) {
        this.props.tagNote(noteId, tagName)
          .then($("#newTag").val(''));
      }
    });

      return (
        <div className='option'>
          <ul className='option-list'>
            { tagIds.map(tagId => (
                <li key={ tagId }
                    className='tag-name'>
                  { note.tags[tagId].name }
                </li>
            ))}
          </ul>

          <input type="text"
                 id='newTag'
                 placeholder='+'/>
        </div>
      );
    }
  }

  render() {

    return (
      <div className='text-editor'>
        <input autoFocus
               className='title'
               value={ this.state.title }
               onChange={ this.update('title') }
               placeholder='Title your note...'/>

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