import React from 'react';
import { Link } from 'react-router';

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return e => {
      e.preventDefault();
      const data = e.target.value;
      this.setState({ [type]: data });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    
    return (
      <div>
        <form className='new-form'
              onSubmit={ this.handleSubmit }>
          <img src="https://www.dropbox.com/s/b8ziisfsi8l3nsg/1484446527_notebook-512.png?raw=1" 
               alt="create_notebook"/>

          <h1>CREATE NOTEBOOK</h1>

          <input type="text"
                 placeholder='Title your notebook'
                 onChange={ this.update('title') }
                 value={ this.state.title }/>

          <div className='buttons'>

            <Link to='/'>
              <input type="submit"
                    onClick={ this.cancel }
                    value='Cancel'/>
            </Link>

            <input type="submit"
                   value='Create Notebook'/>
          </div>
        </form>
      </div>
    );
  }
}

export default NewForm;