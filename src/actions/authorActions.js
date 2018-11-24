import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

export function loadAuthorsSuccess( authors ) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function updateAuthorSuccess( author ) {
  return { type: types.UPDATE_AUTHOR_SUCCESS, author };
}

export function createAuthorSuccess( author ) {
  return { type: types.CREATE_AUTHOR_SUCCESS, author };
}

export function deleteAuthorSuccess( id ) {
  return { type: types.DELETE_AUTHOR_SUCCESS, id };
}


export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch( loadAuthorsSuccess(authors) );
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor( author ) {
  return dispatch => {
    dispatch( beginAjaxCall() );
    return AuthorApi.saveAuthor(author).then(savedAuthor => {
      author.id ? dispatch( updateAuthorSuccess( savedAuthor ) ) : dispatch( createAuthorSuccess( savedAuthor ) );
    })
      .catch(error => {
        dispatch( ajaxCallError() );
        throw(error);
      });
  };
}

export function deleteAuthor( id ) {
  return dispatch => {
    dispatch( beginAjaxCall() );

    return AuthorApi.deleteAuthor( id ).then(() => {
      dispatch( deleteAuthorSuccess(id) );
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}