import React from 'react';
import Order from '../Order/Order'

const OrderContainer = ({orders, removeOrder}) => {
  const listedOrders = orders.map(order => {
    return (
      <Order
        name={order.name}
        description={order.description}
        price={order.price}
        img={order.img}
        id={order.id}
        key={order.id}
        removeOrder={removeOrder}
      />
    )
  })
  return (
    <div className="order_card">
      {listedOrders}
    </div>
  )
}

export default OrderContainer