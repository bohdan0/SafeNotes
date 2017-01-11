import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout()
      .then(() => this.props.router.push('/'));
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <p>Hello {this.props.currentUser.username}!</p>
        <button type="button"
                onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default Home;