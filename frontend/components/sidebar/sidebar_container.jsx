import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import { getNotebook,
         getAllNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = (store, ownProps) => ({
  router: ownProps.router
});

const mapDispatchToProps = dispatch => ({
  // notebooks: () => dispatch(getAllNotebooks()),
  getNotebook: id => dispatch(getNotebook(id)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
