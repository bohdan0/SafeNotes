import React from 'react';

import TagIndexItem from './tag_index_item';
import TagHeader from './tag_header';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = this.props.tags;
    const notes = this.props.notes;
    const tagLetters = Object.keys(tags);

    return (
      <div className='tag-index'>
        <TagHeader />
      
        <div className='tags'>
          {tagLetters.map(lttr => (
            <div key={ lttr }>
              <h1 className='letter'>
                { lttr }
              </h1>

              {tags[lttr].map(tag => (
                <div key={ tag.id }
                     className='tag-item-line'>
                  <TagIndexItem tag={ tag }
                                notes={ notes[tag.id] } />
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