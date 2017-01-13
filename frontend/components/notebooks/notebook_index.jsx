import React from 'react';

import NotebookIndexItem from './notebook_index_item';
import NotebookHeader from './notebook_header';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllNotebooks();
  }

  render() {
    const notebooks = this.props.notebooks;
    const notebooksId = Object.keys(notebooks);

    return (
      <div className='notebook-index'>
        <NotebookHeader />

        <div className='notebooks'>
          {notebooksId.map(id => (
            <NotebookIndexItem notebook={ notebooks[id] } 
                               amount={ notebooksId.length }
                               key={ id } />
          ))}
        </div>
      </div>
    );
  }
}

export default NotebookIndex;