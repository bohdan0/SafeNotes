import { connect } from 'react-redux';

import { login,
         signup,
         receiveAuthErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ forms }) => ({
  errors: forms.auth.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = formType === 'signup' ? signup : login;

  return {
    processForm: user => dispatch(processForm(user)),
    receiveAuthErrors: errors => dispatch(receiveAuthErrors(errors)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
