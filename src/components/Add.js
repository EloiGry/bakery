import React, { Component } from 'react';

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

    handleNameChange (event) {
        this.setState ({name : event})
    }

    handlePriceChange (event) {
        this.setState ({price : 0})
    }

    render() {
        return (
            <>
                <h1>
                    Add
                </h1>
                <input onChange={this.handleNameChange} type="text" />
                <input onChange={this.handlePriceChange} type="range" min="1" max="10" />
                <span> {this.state.price} </span>
                <button onClick={() => this.props.addItem}> </button>
            </>
        );
    }
}

export default Add;