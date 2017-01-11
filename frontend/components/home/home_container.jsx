import { connect } from 'react-redux';

import Home from './home';

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

export default connect(mapStateToProps)(Home);