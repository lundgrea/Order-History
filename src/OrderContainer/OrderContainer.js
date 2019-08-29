import React from 'react';
import Order from '../Order/Order'

const OrderContainer = ({orders}) => {
  console.log('within ordercontainer', orders)
  const listedOrders = orders.map(order => {
    return (
      <Order
        name={order.name}
        description={order.description}
        price={order.img}
        img={order.img}
        id={order.id}
        key={order.id}
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