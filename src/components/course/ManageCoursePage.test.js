import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

// describe('Manage course page', () => {
//   it('sets error message when trying to save empty title', () => {
//     const props = {
//       authors: [],
//       course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
//       actions: { saveCourse: () => { return Promise.resolve(); } } // mock actions dispatched to props
//     };
//
//     // we need to test this component's interactions with its children, so use mount instead of shallow
//     const wrapper = mount(<ManageCoursePage {...props}/>);
//
//     // use .last to get the last input on the page
//     const saveButton = wrapper.find('input').last();
//     // check if the input type is submit
//     expect(saveButton.prop('type')).toBe('submit');
//     // simulate a button click
//     saveButton.simulate('click');
//     expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
//   });
// });