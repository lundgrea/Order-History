import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      name: '',
      description: '',
      price: ''
    }
  }

  handleFormInput = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitOrder = event => {
    event.preventDefault();
    const newOrder = {
      id: Date.now(),
      ...this.state
    }
    this.props.addOrder(newOrder);
    this.clearAllInputFields()
  }

  clearAllInputFields = () => {
    this.setState(
      { 
      img: '',
      name: '',
      description: '',
      price: ''
    })
  }

  render() {
    return( 
      <form>
        <input
        type="text"
        placeholder="Image Url"
        name="img"
        value={this.state.img}
        onChange={event => this.handleFormInput(event)}
        />
        <input
         type="text"
         placeholder="Name:"
         name="name"
         value={this.state.name}
         onChange={event => this.handleFormInput(event)}
         />
        <input
         type="text"
         placeholder="Description:"
         name="description"
         value={this.state.description}
         onChange={event => this.handleFormInput(event)}/>
        <input
         type="text"
         placeholder="Price:"
         name="price"
         value={this.state.price}
         onChange={event => this.handleFormInput(event)}/>
        <button onClick={event=> this.submitOrder(event)}>Add Purchase</button>
      </form>
    )
    }
  }


export default Form