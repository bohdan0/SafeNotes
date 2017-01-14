import React from 'react';

import NotebookIndexContainer from '../notebooks/notebook_index_container';
import TagIndexContainer from '../tags/tag_index_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const index = e.target.alt;
    this.setState({ index });
  }

  renderIndex() {
    const options = {
      notebooks: <NotebookIndexContainer />,
      tags: <TagIndexContainer />
    };

    if (this.state.index) {
      return (
        <div className='index'>
          { options[this.state.index] }
        </div>
      );
    }
  }

  render() {

    return (
      <div>
        <div className='sidebar'>
          <div className='sidebar-top'>
            <img src="https://www.dropbox.com/s/68ohcpzvzc3c26w/1484384030_Vector-icons_39.png?raw=1"
                 alt="Logo" 
                 className="logo"/>

            <img className='sidebar-btn side-new'
                 value='new_note'
                 onClick={ this.handleClick }
                 src='https://www.dropbox.com/s/oknhbq0hezhgcv1/plus%20%281%29.svg?raw=1'/>
          </div>

          <ul className='nav'>
            <li className='sidebar-btn'>
              <img className='side-notes'
                   onClick={ this.handleClick }
                   src='https://www.dropbox.com/s/y8vier7wdrkhznz/document-with-text-lines-.png?raw=1'/>
            </li>

            <li className='sidebar-btn'>
              <img className='side-notebooks'
                   alt='notebooks'
                   onClick={ this.handleClick } 
                   src='https://www.dropbox.com/s/pm1zj16cibldspl/book-with-bookmarker.png?raw=1'/>
            </li>

            <li className='sidebar-btn'>
              <img className='side-tags'
                   src='https://www.dropbox.com/s/bik2y2v7tt9l88y/clothes-tag.png?raw=1'
                   alt='tags'
                   onClick={ this.handleClick }/>
            </li>
          </ul>

          <img className='sidebar-btn side-logout'
               onClick={ this.props.logout }
               src="https://www.dropbox.com/s/skt2svisd0gdzf5/circular-power-on-button.png?raw=1" 
               alt="Log Out"/>
        </div>

        <div className='index-container'>
          { this.renderIndex() }
        </div>
      </div>
    );
  }
}

export default Sidebar;
