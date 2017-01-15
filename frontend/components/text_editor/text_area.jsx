import merge from 'lodash/merge';
import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value }, () => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.props.updateNote(this.state), 1000);
      });
    };
  }

  componentWillReceiveProps({ note }) {
    const { title, body } = note;
    this.setState({ title, body });
  }

  render() {
    return (
      <div className='text-area'>
        <input className='title'
               value={ this.state.title }
               onChange={ this.update('title') }/>

        <textarea className='body'
                  value={ this.state.body }
                  onChange={ this.update('body') }/>

      </div>
    );
  }
}

export default TextArea;