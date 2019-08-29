import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
})

// it('should update state with an order when addOrder is called', () => {
//   const mockOrder = {
//     img: 'URL',
//     name: 'iphone',
//     description: 'one of those phones',
//     price: "500",
//     id: Date.now()
//   }
//   const expected = [mockOrder]

//   expect(wrapper.state('orders')).toEqual([])
//   wrapper.instance().addOrder(mockOrder)
//   expect(wrapper.state('orders')).toEqual(expected)

// });

})
