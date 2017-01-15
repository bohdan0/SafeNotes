import { connect } from 'react-redux';

import { login,
         signup,
         receiveErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ currentUser }) => ({
  errors: currentUser.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = formType === 'signup' ? signup : login;

  return {
    processForm: user => dispatch(processForm(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
