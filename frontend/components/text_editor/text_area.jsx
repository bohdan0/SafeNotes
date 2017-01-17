import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='text-area'>
        <input autoFocus
               className='title'
               value={ this.props.note.title }
               onChange={ this.props.update('title') }
               placeholder='Title your new note...'/>

        <textarea className='body'
                  value={ this.props.note.body }
                  onChange={ this.props.update('body') }
                  placeholder='Body goes here...'/>

      </div>
    );
  }
}

export default TextArea;