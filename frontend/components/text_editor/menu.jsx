import ReactQuill from 'react-quill';
import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='menu'>
        <h1>TEXT EDITING MENU</h1>
        <ReactQuill />
      </div>
    );
  }
}

export default Menu;