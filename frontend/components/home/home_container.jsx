import { connect } from 'react-redux';

import { getAllNotes } from '../../actions/note_actions';
import Home from './home';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  getAllNotes: () => dispatch(getAllNotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);