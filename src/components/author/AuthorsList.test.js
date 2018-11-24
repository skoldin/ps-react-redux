import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import AuthorsList from './AuthorsList';
import { DeleteLink } from "./DeleteLink";

function setup() {
  const authors = [
    {
      id: 'cory-house',
      firstName: 'Cory',
      lastName: 'House'
    },
    {
      id: 'scott-allen',
      firstName: 'Scott',
      lastName: 'Allen'
    },
    {
      id: 'dan-wahlin',
      firstName: 'Dan',
      lastName: 'Wahlin'
    }
  ];

  return mount(<AuthorsList authors={authors}/>);
}

describe('Authors page', () => {
  // it('Should display 3 authors with first and last name', () => {
  //   const wrapper = setup();
  //   const $table = wrapper.find('tbody');
  //
  //   expect($table.find('tr').length).toBe(3);
  // });
  //
  // it('Deleting an author should decrease the number of authors', () => {
  //   const wrapper = setup();
  //   const $table = wrapper.find('tbody');
  //
  //   $table.find('.delete-author').first().simulate('click');
  //
  //   expect($table.find('tr').length).toBe(2);
  // });
});