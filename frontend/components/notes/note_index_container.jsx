import { connect } from 'react-redux';

import NoteIndex from './note_index';

const mapStateToProps = ({ notes }) => ({
  notes
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);