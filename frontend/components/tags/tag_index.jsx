import React from 'react';

import TagIndexItem from './tag_index_item';
import TagHeader from './tag_header';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: props.tags };
  }

  componentWillMount() {
    this.props.fetchAllTags()
      .then(tags => this.setState({ tags }));
  }

  render() {
    const tags = this.state.tags;
    const notes = this.props.notes;
    const tagLetters = Object.keys(tags).sort();

    return this.props.children || (
      <div className='tag-index'>
        <TagHeader />
      
        <div className='tags'>
          {tagLetters.map(lttr => (
            <div key={ lttr }>
              <h1 className='letter'>
                { lttr }
              </h1>

              {tags[lttr].map(tag => (
                <div className='tag-item-line'
                     key={ tag.id }>
                  <TagIndexItem tag={ tag }
                                notes={ notes[tag.id] || 0 } />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TagIndex;