import React from 'react';
import merge from 'lodash/merge';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note || { id: null, 
                                 title: '', 
                                 body: '',
                                 notebook_id: props.notebookId };
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value }, () => {
        clearTimeout(this.timeout);
        if (this.state.id) {
          this.timeout = setTimeout(() => this.props.updateNote(this.state), 500);
        } else if (this.state.body.length > 0 && this.state.title.length > 0) {
          this.timeout = setTimeout(() => this.props.createNote(this.state)
            .then(note => this.setState({ note })), 500);
        }
      });
    };
  }

  componentWillReceiveProps({ note }) {
    if (note) {
      const { id, title, body, notebook_id } = note;
      this.setState({ id, title, body, notebook_id });
    }
  }

  render() {

    return (
      <div className='text-area'>
        <input className='title'
               value={ this.state.title }
               onChange={ this.update('title') }
               placeholder='Title your new note...'/>

        <textarea className='body'
                  value={ this.state.body }
                  onChange={ this.update('body') }
                  placeholder='Body goes here...'/>

      </div>
    );
  }
}

export default TextArea;