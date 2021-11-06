import React, { Component } from 'react'

class Add extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0
    }
    
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handlePriceChange(e) {
    this.setState({ price: e.target.value })
  }

  render() {
    const { name, price } = this.state

    return (
      <>
        <h1>Add</h1>

        <label className="form-label">Name</label>
        <input
          className="form-control mb-4"
          type="text"
          onChange={this.handleNameChange}
          value={name}
        />

        <label className="form-label">Price: {price}$</label>
        <br />
        <input
          type="range"
          onChange={this.handlePriceChange}
          min="1"
          max="10"
          value={price}
        />

        <br />
        <button
          className="btn mt-3 btn-outline-primary"
          onClick={() => this.props.addItem(name, price)}
        >
          Ajouter
        </button>
      </>
    );
  }
}

export default Add