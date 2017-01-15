import React from 'react';

import Menu from './menu';
import TextArea from './text_area';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='text-editor'>
        <Menu />
        <TextArea note={ this.props.note }
                  updateNote={ this.props.updateNote } />
      </div>
    );
  }
}

export default TextEditor;