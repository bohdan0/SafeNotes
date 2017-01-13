import React from 'react';

import NotebookIndexItem from './notebook_index_item';

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
      <div>
        {notebooksId.map(id => (
          <NotebookIndexItem notebook={notebooks[id]} 
                             key={id} />
        ))}
      </div>
    );
  }
}

export default NotebookIndex;