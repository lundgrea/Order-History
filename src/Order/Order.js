import React from 'react';
import './Order.css';


const Order = ({name, price, description, id, img}) => {
  console.log(name)
  return (
    <section>
      <img alt="item-photo" src={img}></img>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <p>{description}</p>
      <button>Remove From History</button>
    </section>
  )
}

export default Order