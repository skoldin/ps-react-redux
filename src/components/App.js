import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header
          loading={this.props.loading}
          coursesNumber={this.props.coursesNumber}/>
        {/* these will be passed in from React Router */}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps( state, ownProps ) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    coursesNumber: state.courses.length
  };
}

export default connect(mapStateToProps)(App);
