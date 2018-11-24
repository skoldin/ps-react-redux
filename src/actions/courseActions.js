import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

export function loadCoursesSuccess( courses ) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess( course ) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess( course ) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess( id ) {
  return { type: types.DELETE_COURSE_SUCCESS, id };
}


// thunks
// we want to handle a promise and dispatch an action when the promise is resolved
export function loadCourses() {
  return function ( dispatch ) {
    dispatch(beginAjaxCall());
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
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch( updateCourseSuccess(savedCourse) ) : dispatch( createCourseSuccess(savedCourse) );
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteCourse( id ) {
  return function ( dispatch ) {
    dispatch(beginAjaxCall());

    return courseApi.deleteCourse(id).then(() => {
     dispatch( deleteCourseSuccess(id) );
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
