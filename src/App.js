import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      activeTab: "add",
      items: []
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleButtonClick (event) {
    event = event.target.innerText
    // console.log(event)
    this.setState ({activeTab : event})
  }

  addItem (name, price) {
    const newItem = {
      name : name,
      price : price
    }
    this.setState ({items : [...this.state.items, newItem]})
  }

  render() {
    console.log(this.state.items)
    return (
      <div className="container">
        <Button children="Add" handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "Add"} />
        <Button children="List" handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "List"}/>
        <Button children="Pay" handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "Pay"}/>
        {this.state.activeTab === "Add" && <Add addItem={this.addItem} />}
        {this.state.activeTab === "List" && <List items={this.state.items} />}
        {this.state.activeTab === "Pay" && <Pay />}
      </div>
    );
  }
}

export default App;
