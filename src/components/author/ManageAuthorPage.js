import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import toastr from 'toastr';
import {browserHistory} from "react-router";

export class ManageAuthorPage extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.state = {
      author: Object.assign({}, props.author), // this is just for initializing state
      errors: {},
      saving: false
    };

    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.author.id !== nextProps.author.id) {
      // this is to populate form when existing author is loaded directly
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }

  updateAuthorState(event) {
    const field = event.target.name;
    let author = Object.assign({}, this.state.author);

    author[field] = event.target.value;

    return this.setState({author: author});
  }

  saveAuthor(event) {
    event.preventDefault();

    this.setState({saving: true});
    this.props.actions.saveAuthor(this.state.author)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Author saved');
    // redirect to authors page using react router
    this.context.router.push('/authors');
  }

  render() {
    return (
      <div>
        <AuthorForm
          onChange={this.updateAuthorState}
          onSave={this.saveAuthor}
          author={this.state.author}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};

function getAuthorById( authors, id ) {
  const author = authors.filter(author => author.id === id);

  if ( author.length ) {
    return author[0];
  }

  return null;
}

const mapStateToProps = ( state, ownProps ) => {
  const authorId = ownProps.params.id; // from the path '/author/:id'

  let author = {id: '', firstName: '', lastName: ''};

  if ( authorId && state.authors.length > 0 ) {
    author = getAuthorById(state.authors, authorId);
  }

  return {
    author
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    actions: bindActionCreators( authorActions, dispatch )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( ManageAuthorPage );