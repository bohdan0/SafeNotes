import React from 'react';

import SidebarContainer from '../sidebar/sidebar_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home'>
        <SidebarContainer router={ this.props.router }/>

        <main className='main'>
          <h1>HOME</h1>
          <p>Hello {this.props.currentUser.username}!</p>
        </main>
      </div>
    );
  }
}

export default Home;
