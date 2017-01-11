import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => (
        this.props.router.push('/home')
      ))
      .fail(() => (
        this.setState({ username: '', password: '' })
      ));
  }

  renderGuestButton() {
    if(this.props.formType !== 'signup') {
      return (
        <input type="submit"
               value='Guest Login' 
               onClick={this.guestLogin} />
      );
    }
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.processForm({ username: 'Guest', password: 'password'})
      .then(() => (
          this.props.router.push('/home')
        ));
  }

  render() {
    const text = this.props.formType === 'signup' ? 'Create Account' : 'Sign In';
    const firstWord = text === 'Sign In' ? 'Don\'t' : 'Already';
    const oppositeText = text === 'Sign In' ? 'Create Account' : 'Sign In';
    const oppositeForm = text === 'Sign In' ? 'signup' : 'login';

    return (
      <div className='auth-form'>
        <figure>
          <img src="http://image.flaticon.com/icons/svg/235/235300.svg"              alt="Logo" />
        </figure>

        <h3>{text}</h3>

        <form onSubmit={this.handleSubmit}>

          <input type="text" 
                 value={this.state.username}
                 placeholder='Username'
                 onChange={this.update('username')} />

          <input type="password" 
                 value={this.state.password}
                 placeholder='Password'
                 onChange={this.update('password')} />

          <input type="submit"
                 value={text} />

          {this.renderGuestButton()}
        </form>

        <div className='switch-panel'>
          <p>{firstWord} have an account?</p>
          <Link to={`/${oppositeForm}`}>{oppositeText}</Link>
        </div>
      </div>
    );
  }
}

export default AuthForm;
