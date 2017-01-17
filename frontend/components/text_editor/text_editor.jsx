import React from 'react';

import Menu from './menu';
import TextArea from './text_area';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note || { id: null, 
                                 title: '', 
                                 body: '',
                                 notebook_id: props.notebookId };

    this.update = this.update.bind(this);
  }

  componentWillReceiveProps({ note }) {
    if (note) {
      const { id, title, body, notebook_id } = note;
      this.setState({ id, title, body, notebook_id });
    }
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

  render() {

    return (
      <div className='text-editor'>
        <Menu />
        <TextArea note={ this.state }
                  update={ this.update }/>
      </div>
    );
  }
}

export default TextEditor;