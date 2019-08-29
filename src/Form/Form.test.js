import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form addOrder={jest.fn()}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when handleFormInput is called', () => {
    const mockEvent = {target: {name: 'img', value: 'the img URL input value'}}
    const expectedURL = 'the img URL input value';
    wrapper.instance().handleFormInput(mockEvent);
    expect(wrapper.state('img')).toEqual(expectedURL)
  })

})