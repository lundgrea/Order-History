import React from 'react';

const OrderContainer = ({orders}) => {
  const listedOrders = orders.map(order => {
    return (
      <Order
        item={order.item}
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