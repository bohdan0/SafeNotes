import React from 'react';


import SidebarContainer from '../sidebar/sidebar_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllNotes();
    this.props.getAllNotebooks();
  }

  render() {

    return (
      <div className='home'>
        { this.props.location.pathname === '/home/new/note' ? '' : <SidebarContainer router={ this.props.router }/> }

        <div className='main'>
          { this.props.children }
        </div>

      </div>
    );
  }
}

export default Home;
