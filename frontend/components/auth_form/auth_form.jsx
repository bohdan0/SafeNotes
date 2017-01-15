import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.pathname !== this.props.location.pathname) {
      this.props.receiveErrors(null);
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => {
        this.props.receiveErrors(null);
        this.props.router.push('/home/notebooks/all');
      })
      .fail(errors => {
        this.setState({ username: '', password: '' });
      });
  }

  renderGuestButton() {
    if(this.props.formType !== 'signup') {
      return (
        <input type="submit"
               value='Guest Login'
               onClick={ this.guestLogin } />
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.processForm({ username: 'Guest', password: 'password'})
      .then(() => (
        this.props.router.push('/home/notebooks/all')
      ));
  }

  render() {
    const text = this.props.formType === 'signup' ? 'Create Account' : 'Sign In';
    const firstWord = text === 'Sign In' ? 'Don\'t' : 'Already';
    const oppositeText = text === 'Sign In' ? 'Create Account' : 'Sign In';
    const oppositeForm = text === 'Sign In' ? 'signup' : 'login';

    return (
      <div className='auth-form'>

        <figure className='auth-form-top'>
          <img src="https://www.dropbox.com/s/68ohcpzvzc3c26w/1484384030_Vector-icons_39.png?raw=1"
            alt="Logo" />

          <h3>{text}</h3>
        </figure>

        <div className='auth-form-main'>
          {this.renderErrors()}

          <form onSubmit={this.handleSubmit}>

            <input type="text"
                  className='auth-form-input'
                  value={this.state.username}
                  placeholder='Username'
                  onChange={this.update('username')} />

            <input type="password"
                  className='auth-form-input'
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.update('password')} />

            <input type="submit"
                  value={text} />

            {this.renderGuestButton()}
          </form>
        </div>

        <div className='switch-panel'>
          <p>{firstWord} have an account?</p>
          <Link to={`/${oppositeForm}`}>{oppositeText}</Link>
        </div>
      </div>
    );
  }
}

export default AuthForm;
