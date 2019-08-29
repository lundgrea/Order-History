import React from 'react';
import { shallow } from 'enzyme';
import OrderContainer from './OrderContainer';

describe('OrderContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OrderContainer
      orders={[
        {
        description: "The latest phone to come out by Apple.  It has a faster processor and improved camera to take HDR images.",
        id: 1,
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154",
        name: "iPhone Xs",
        price: 900
        },
        {
        description: "The thirteenth novel written by Charles Dickens.  It depicts the personal growth and personal development of an orphan nicknamed Pip.",
        id: 2,
        img: "https://jangal.com/api/ui/image/watermark?path=/uploads/product/Great%20Expectations%20by%20Charles%20Dickens.png&etype=product",
        name: "Great Expectations",
        price: 10
        }
      ]}
      removeOrder={jest.fn()}
    />)

  })

  it('shoud match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  

})
