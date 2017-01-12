import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getNotebook(1);
  }

  handleClick(e) {
    const activity = e.target.value;
    this.props[activity].call()
      .then(() => this.props.router.push('/'));
  }

  render() {

    return (
      <div className='sidebar'>
      <div>
        <img src="http://image.flaticon.com/icons/svg/235/235300.svg"
             alt="Logo" />

        <button className='sidebar-btn new'
                value='new_note'
                onClick={ this.handleClick }>New Note</button>
      </div>

        <ul className='nav'>
          <li>
            <button className='sidebar-btn notes'
                    value='notes'
                    onClick={ this.handleClick }>Notes</button>
          </li>

          <li>
            <button className='sidebar-btn notebooks'
                    value='notebooks'
                    onClick={ this.handleClick }>Notebooks</button>
          </li>

          <li>
            <button className='sidebar-btn tags'
                    value='tags'
                    onClick={ this.handleClick }>Tags</button>
          </li>
        </ul>

        <button className='sidebar-btn logout'
                value='logout'
                onClick={ this.handleClick }>Log Out</button>
      </div>
    );
  }
}

export default Sidebar;
