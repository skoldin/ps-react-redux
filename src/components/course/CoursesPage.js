import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// this is for simpler dispatch mapping
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const { courses } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value={"Add Course"}
          className={"btn btn-primary"}
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

// props validation
CoursesPage.propTypes = {
  // this will be passed in by connect if we omit mapping dispatch to props
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// returns an object that contains the properties that we would like to expose to our component
// ownProps are props that are attached to this component
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // this is the data passed to our root reducer
  };
}
// determines what actions are available in our component
function mapDispatchToProps( dispatch ) {
  return {
    // manual wrapping (without bindActionCreators
    // createCourse: course => dispatch( courseActions.createCourse(course) )

    // map all actions
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// we use connect function to create components that can interact with redux
// If we omit mapDispatchToProps so connects injects dispatch for us and we can use it like this: this.props.dispatch(actionCreator(data)) in the component
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);