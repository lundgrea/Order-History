import React from 'react';
import './Order.css';


const Order = ({name, price, description, id, img, removeOrder}) => {
  return (
    <section className="card">
      <img alt="item" src={img} className="item_image"></img>
      <h2 className="item_name">{name}</h2>
      <h3 className="item_price">{price}</h3>
      <p className="item_description">{description}</p>
      <button className="item_remove-button" onClick={() => removeOrder(id)}>Remove From History</button>
    </section>
  )
}

export default Order