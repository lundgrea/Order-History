import React, { Component } from 'react';
import OrderContainer from '../OrderContainer/OrderContainer'
import Form from '../Form/Form'
import { postNewOrder } from '../apiCalls'
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

  addOrder = (newOrder)=> {
    postNewOrder(newOrder)
    .then(newOrder => this.setState({orders: [...this.state.orders, newOrder]}))
    .catch(error => this.setState({error : error.message}))
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/purchases')
      .then(response => response.json())
      .then(orders => this.setState({orders: orders}))
      .catch(error => this.setState({error: error.message}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <Form addOrder={this.addOrder}/>
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
