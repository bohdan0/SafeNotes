import { connect } from 'react-redux';

import { login, signup } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: Boolean(currentUser)
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = formType === 'login' ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
