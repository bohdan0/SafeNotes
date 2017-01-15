import { connect } from 'react-redux';

import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import { getAllNotebooks } from '../../actions/notebook_actions';
import { getAllNotes } from '../../actions/note_actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  notes: () => dispatch(getAllNotes()),
  notebooks: () => dispatch(getAllNotebooks()),
  logout: () => dispatch(logout())
                  .then(() => ownProps.router.push('/login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
