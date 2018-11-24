import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AuthorsList from "../author/AuthorsList";
import {browserHistory} from "react-router";

class AuthorsPage extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }
  
  render() {
    const { authors } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value={"Add Author"}
               className={"btn btn-primary"}
                onClick={this.redirectToAddAuthorPage}/>
        <AuthorsList authors={authors}/>
      </div>
    );
  }
}

function mapStateToProps( state, ownProps ) {
  return {
    authors: state.authors
  };
}

export default connect(mapStateToProps)(AuthorsPage);