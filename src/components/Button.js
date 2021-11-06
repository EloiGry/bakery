import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { text, handleClick, isSelected } = this.props

    return (
      <button
        type="button"
        className={`btn me-3 ${isSelected ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
    )
  }
}

export default Button