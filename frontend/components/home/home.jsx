import React from 'react';


import SidebarContainer from '../sidebar/sidebar_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllNotes();
  }

  render() {
    return (
      <div className='home'>
        <SidebarContainer router={ this.props.router }/>

        <div className='main'>
          { this.props.children }
        </div>

      </div>
    );
  }
}

export default Home;
