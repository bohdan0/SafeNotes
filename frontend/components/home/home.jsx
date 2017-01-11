import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <p>Hello {this.props.currentUser.username}!</p>
      </div>
    );
  }
}

export default Home;