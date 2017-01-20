import React from 'react';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

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

  deleteTag(tag) {
    return e => {
      let tags = merge({}, this.state.tags);
      const key = tag.name[0].toUpperCase();

      tags[key].map((_tag, i) => {
        if (_tag.id === tag.id) tags[key].splice(i, 1);
      });

      if (tags[key].length === 0) delete tags[key];

      this.props.deleteTag(tag.id)
        .then(this.setState({ tags }));
    };
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

                <img className='trash-can'
                     alt="trash_can"
                     onClick={ this.deleteTag(tag) }
                     src="http://res.cloudinary.com/safenotes/image/upload/v1484796892/1484607671_trash_bin_n1hdry.png"/>

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