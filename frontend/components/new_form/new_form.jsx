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
      const title = e.target.value;
      this.setState({ title });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const param = this.props.params.param;
    this.props[param](this.state.title)
      .then(() => hashHistory.push(`/home/${ param }s/all`));
  }

  render() {
    const word = this.props.params.param;
    const placeholder = `Title your ${ word }`;
    const choices = ['notebook', 'tag'];

    if (choices.includes(word)) {
      let imgUrl;
      if (word === 'notebook') {
        imgUrl = "https://www.dropbox.com/s/b8ziisfsi8l3nsg/1484446527_notebook-512.png?raw=1";
      } else if (word === 'tag') {
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
                   autoFocus
                   placeholder={ placeholder }
                   onChange={ this.update() }
                   value={ this.state.title }/>

            <div className='buttons'>

              
            <input type="button"
                   onClick={ () => hashHistory.goBack() }
                   value='Cancel'/>
              

              <input type="submit"
                     value={ `Create ${ word }` }/>
            </div>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default NewForm;