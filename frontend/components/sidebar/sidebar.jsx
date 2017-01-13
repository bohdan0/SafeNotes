import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const nextPage = e.target.value;
    this.props.router.push(`/home/${ nextPage }`);
  }

  render() {

    return (
      <div className='sidebar'>
        <div className='sidebar-top'>
          <img src="http://image.flaticon.com/icons/svg/235/235300.svg"
              alt="Logo" />

          <button className='sidebar-btn side-new'
                  value='new_note'
                  onClick={ this.handleClick }>New Note</button>
        </div>

        <ul className='nav'>
          <li>
            <button className='sidebar-btn side-notes'
                    value='notes'
                    onClick={ this.handleClick }>Notes</button>
          </li>

          <li>
            <button className='sidebar-btn side-notebooks'
                    value='notebooks'
                    onClick={ this.handleClick }>Notebooks</button>
          </li>

          <li>
            <button className='sidebar-btn side-tags'
                    value='tags'
                    onClick={ this.handleClick }>Tags</button>
          </li>
        </ul>

        <button className='sidebar-btn side-logout'
                value='logout'
                onClick={ this.props.logout }>Log Out</button>
      </div>
    );
  }
}

export default Sidebar;
