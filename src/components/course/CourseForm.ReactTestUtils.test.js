import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

// setup function that will return the output of the component under test
function setup(saving) {
  // instantiate props separately for readability
  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  // create renderer instance
  let renderer = TestUtils.createRenderer();
  // render our component and get output
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  // return a few items that could be useful for our tests
  return {
    props,
    output,
    renderer
  };
}

// group and label test with describe
describe('CourseForm via React Test Utils', () => {
  // describe what we're trying to test with 'it' function
  it('renders form and h1', () => {
    const { output } = setup();
    // make sure that the top-level tag is form
    expect(output.type).toBe('form');
    // get the h1 child element
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    // get the 6th child
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const { output } = setup(true);
    // get the 6th child
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});