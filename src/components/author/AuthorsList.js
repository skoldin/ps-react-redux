import React, { PropTypes } from 'react';
import {Link} from "react-router";
import { connect } from 'react-redux';
import DeleteLink from './DeleteLink';

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {this.props.authors.map((author, i) =>
          <tr key={i}>
            <td className={"name"}><Link to={'/author/' + author.id}>{author.firstName + ' ' + author.lastName}</Link></td>
            <td><DeleteLink authorId={author.id}/></td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired
};

function mapStateToProps( state ) {
  return {
    authors: state.authors
  };
}

export default AuthorsList;