import React, { PropTypes } from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import * as authorActions from '../../actions/authorActions';
import toastr from 'toastr';

export class DeleteLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    // console.log(this.props);

    if ( this.props.courses.filter(course => {
      return course.authorId === this.props.authorId
    }).length ) {
      toastr.error('Could not remove an author that has courses');
      return;
    }

    this.props.dispatch( authorActions.deleteAuthor( this.props.authorId ) );
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