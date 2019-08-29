import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

describe('Order', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Order
      img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154"
      name="iphone"
      price="300"
      description="One of a kind iphone"
      removeOrder={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call the removeOrder prop with the card\'s id when clicked', () =>{
    const removeOrderMock = jest.fn()
    const wrapper = shallow(<Order
      img="https://jangal.com/api/ui/image/watermark?path=/uploads/product/Great%20Expectations%20by%20Charles%20Dickens.png&etype=product"
      name="A Book"
      price="15"
      description="very interesting book"
      id={7}
      removeOrder={removeOrderMock}
    />
    )
    wrapper.find('.item_remove-button').simulate('click')

    expect(removeOrderMock).toHaveBeenCalledWith(7)
  })
})