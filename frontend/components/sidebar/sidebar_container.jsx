import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import { getNotebook,
         getAllNotebooks } from '../../actions/notebook_actions';
import { getAllNotes } from '../../actions/note_actions';

const mapStateToProps = (store, ownProps) => ({
  router: ownProps.router
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  notes: () => dispatch(getAllNotes()),
  notebooks: () => dispatch(getAllNotebooks()),
  getNotebook: id => dispatch(getNotebook(id)),
  logout: () => dispatch(logout())
                  .then(() => ownProps.router.push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
