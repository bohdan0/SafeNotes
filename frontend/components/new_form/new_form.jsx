import React from 'react';
import { Link, hashHistory } from 'react-router';

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => {
      e.preventDefault();
      const title = e.target.value;
      this.setState({ title });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const param = this.props.params.param;
    this.props[param](this.state.title)
      .then(() => hashHistory.push('/'));
  }

  render() {
    const word = this.props.params.param;
    const placeholder = `Title your ${ word }`;

    let imgUrl;
    if (word === 'notebook') {
      imgUrl = "https://www.dropbox.com/s/b8ziisfsi8l3nsg/1484446527_notebook-512.png?raw=1";
    } else {
      imgUrl = "https://www.dropbox.com/s/xa0nb2zcqcd5mt3/1484475589_finance-25.png?raw=1";
    }
    
    return (
      <div>
        <form className='new-form'
              onSubmit={ this.handleSubmit }>
          <img src={ imgUrl }
               alt="new"/>

          <h1>CREATE { word.toUpperCase() }</h1>

          <input type="text"
                 placeholder={ placeholder }
                 onChange={ this.update() }
                 value={ this.state.title }/>

          <div className='buttons'>

            <Link to='/'>
              <input type="button"
                     onClick={ this.cancel }
                     value='Cancel'/>
            </Link>

            <input type="submit"
                   value={ `Create ${ word }` }/>
          </div>
        </form>
      </div>
    );
  }
}

export default NewForm;