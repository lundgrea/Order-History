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

          </div>
        </header>
        <div className='purchase-container'>
          <OrderContainer orders={this.state.orders}/>
        </div>
      </div>
    );
  }
}

export default App;
