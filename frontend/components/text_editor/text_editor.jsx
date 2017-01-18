import ReactQuill from 'react-quill';
import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note || { id: null, 
                                 title: '', 
                                 body: '',
                                 notebook_id: props.notebookId };
  }

  componentWillReceiveProps({ note }) {
    this.setListenerForTag(note);

    const { id, title, body, notebook_id } = note;
    this.setState({ id, title, body, notebook_id });
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
    return e => {
      const text = type === 'body' ? e : e.target.value;
      this.setState({ [type]: text }, this.autosave());
    };
  }

  setListenerForTag(note) {
    $("#newTag").off('keyup');
    $("#newTag").on('keyup', e => { 
      const tagName = e.target.value;

      if (e.keyCode === 13 && tagName.length > 0) {
        this.props.tagNote(note.id, tagName)
          .then($("#newTag").val(''));
      }
    });
  }

  renderOptionMenu() {
    if (this.props.note) {
      const note = this.props.note;
      const tagIds = note.tag_ids;

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