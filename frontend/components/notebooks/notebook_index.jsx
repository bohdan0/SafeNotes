import React from 'react';

import NotebookIndexItem from './notebook_index_item';
import NotebookHeader from './notebook_header';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notesPerNotebook = this.props.notesPerNotebook;
    const notebooks = this.props.notebooks;
    const notebooksId = Object.keys(notebooks);
  
    return this.props.children || (
      <div className='notebook-index'>
        <NotebookHeader />

        <div className='notebooks'>
          {notebooksId.map(id => (
            <NotebookIndexItem notebook={ notebooks[id] } 
                               amount={ notesPerNotebook[id] || 0 }
                               key={ id } 
                               deleteNotebook={ this.props.deleteNotebook }/>
          ))}
        </div>
      </div>
    );
  }
}

export default NotebookIndex;