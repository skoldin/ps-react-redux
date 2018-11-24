import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
   it('should create a CREATE_COURSE_SUCCESS action', () => {
     const course = { id: 'clean-code', title: 'Clean Code' };

     const expectedAction = {
       type: types.CREATE_COURSE_SUCCESS,
       course: course
     };

     const action = courseActions.createCourseSuccess(course);

     expect(action).toEqual(expectedAction);
   });
  });
});

// configure the mock store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  // clean up after each test
  afterEach(() => {
    nock.cleanAll();
  });

  // we pass a function called done to Mocha to call and let it know when async work is complete
  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // example call to nock
    // add the url that we are going to hit and hardcode the response to receive
    // nock('http://example.com')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    // call a mock store and set some initial state
    const store = mockStore({courses: []}, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});