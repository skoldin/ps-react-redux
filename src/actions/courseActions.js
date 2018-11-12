import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess( courses ) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess( courses ) {
  return { type: types.UPDATE_COURSE_SUCCESS, courses };
}

export function createCourseSuccess( courses ) {
  return { type: types.CREATE_COURSE_SUCCESS, courses };
}

// thunks
// we want to handle a promise and dispatch an action when the promise is resolved
export function loadCourses() {
  return function ( dispatch ) {
    // this returns a promise
    return courseApi.getAllCourses().then(courses => {
      // dispatch an action creator after the promise is resolved
      dispatch( loadCoursesSuccess( courses ) );
    }).catch(error => { // basic error handling
      throw( error );
    });
  };
}

export function saveCourse( course ) {
  // we can get particular pieces of state using getState, without having to pass these in
  return function ( dispatch, getState ) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch( updateCourseSuccess(savedCourse) ) : dispatch( createCourseSuccess(savedCourse) );
    }).catch(error => {
      throw(error);
    });
  };
}