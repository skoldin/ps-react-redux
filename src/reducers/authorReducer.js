import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch( action.type ) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case types.CREATE_AUTHOR_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.author)
      ];

    case types.UPDATE_AUTHOR_SUCCESS:
      return [
        ...state.filter(author => {
          return author.id !== action.author.id;
        }), // get an array of all courses except for those that are being updated
        Object.assign({}, action.author) // include the course that is being updated to the array
      ];

    case types.DELETE_AUTHOR_SUCCESS:
      return [
        ...state.filter(author => {
          return author.id !== action.id;
        })
      ];
    default:
      return state;
  }
}