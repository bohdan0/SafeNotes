import React from 'react';

import TagIndexItem from './tag_index_item';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ids = Object.keys(this.props.tags);

    return (
      <div>
        {ids.map(id => (
          <TagIndexItem tag={this.props.tags[id]}
                        key={id} />
        ))}
      </div>
    );
  }
}

export default TagIndex;