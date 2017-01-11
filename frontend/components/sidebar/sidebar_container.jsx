import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (store, ownProps) => ({
  router: ownProps.router
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
