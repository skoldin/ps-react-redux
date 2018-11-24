import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch( action.type ) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => {
          return course.id !== action.course.id;
        }), // get an array of all courses except for those that are being updated
        Object.assign({}, action.course) // include the course that is being updated to the array
      ];
    case types.DELETE_COURSE_SUCCESS:
      return [
        ...state.filter(course => {
          return course.id !== action.id;
        })
      ];
    default:
      return state;
  }
}