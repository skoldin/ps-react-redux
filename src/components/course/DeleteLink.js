import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

export class DeleteLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.dispatch( courseActions.deleteCourse( this.props.courseId ) );
  }

  render() {
    return (
      <a className="delete-author text-danger ButtonLink" href={null} style={{cursor: 'pointer'}} onClick={this.handleClick}>delete</a>
    );
  }
}

function mapStateToProps( state, ownProps ) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(DeleteLink);