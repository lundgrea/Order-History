import React from 'react';
import './Order.css';


const Order = ({name, price, description, id, img, removeOrder}) => {
  return (
    <section className="card">
      <img alt="item-photo" src={img}></img>
      <h2>{name}</h2>
      {/* <h2>{price}</h2> */}
      <p>{description}</p>
      <button onClick={() => removeOrder(id)}>Remove From History</button>
    </section>
  )
}

export default Order