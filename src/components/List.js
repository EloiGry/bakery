import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <>
        <h1>List</h1>
        <ul className="list-group">
          {this.props.items.map(item => (
            <li className="list-group-item d-flex align-items-center py-4" key={item.name}>
              <span>{item.name} - {item.price}$</span>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default List