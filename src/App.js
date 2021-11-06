import React, { Component } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Button from "./components/Button"
import Add from "./components/Add"
import List from "./components/List"
import Pay from "./components/Pay"

class App extends Component {
  constructor() {
    super()

    this.state = {
      activeTab: "Add",
      items: []
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleButtonClick(str) {
    this.setState({ activeTab: str })
  }

  addItem(name, price) {
    const newItem = {
      name: name,
      price: price
    }

    this.setState({ items: [...this.state.items, newItem] })
  }

  render() {
    const { activeTab, items } = this.state
  
    return (
      <div className="container my-5">
        <h1>Bakery</h1>

        <div className="mb-5">
          <Button
            text="Add"
            handleClick={this.handleButtonClick}
            isSelected={activeTab === "Add"}
          />

          <Button
            text="List"
            handleClick={this.handleButtonClick}
            isSelected={activeTab === "List"}
          />

          <Button
            text="Pay"
            handleClick={this.handleButtonClick}
            isSelected={activeTab === "Pay"}
          />
        </div>

        {activeTab === "Add" && <Add addItem={this.addItem} />}
        {activeTab === "List" && <List items={items} />}
        {activeTab === "Pay" && <Pay />}
      </div>
    )
  }
}

export default App
