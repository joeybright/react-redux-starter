
import { connect } from 'react-redux';
import { exampleAction } from '../actions/example';
import App from '../components/App.jsx';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

export default AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
