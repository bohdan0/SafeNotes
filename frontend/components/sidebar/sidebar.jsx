import React from 'react';

class Sidebar extends React.Component {
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
      <div className='sidebar'>
      <div>
        <img src="http://image.flaticon.com/icons/svg/235/235300.svg"              
            alt="Logo" />
        
        <button className='sidebar-btn'>New Note</button>
      </div>

        <ul className='nav'>
          <li>
            <button className='sidebar-btn notes'>Notes</button>
          </li>

          <li>
            <button className='sidebar-btn notebooks'>Notebooks</button>
          </li>

          <li>
            <button className='sidebar-btn tags'>Tags</button>
          </li>
        </ul>

        <button type="button"
                className='sidebar-btn logout'
                onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default Sidebar;
