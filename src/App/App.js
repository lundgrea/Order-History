import React, { Component } from 'react';
import OrderContainer from '../OrderContainer/OrderContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      isLoading: true,
      error: ''
    }
  }

  removeOrder = (id) => {
    const filteredOrders = this.state.orders.filter(order => {
      return order.id != id
    })
    this.setState({orders: filteredOrders})
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/purchases')
      .then(response => response.json())
      .then(orders => this.setState({orders: orders}))
      .catch(error => this.setState({error: error.message}))
  }

  render() {
    console.log(this.state.orders)
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>

          </div>
        </header>
        <div className='purchase-container'>
          <OrderContainer orders={this.state.orders} removeOrder={this.removeOrder}/>
        </div>
      </div>
    );
  }
}

export default App;
