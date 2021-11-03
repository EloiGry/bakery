import React, { Component } from 'react';

class Button extends Component {
    render() {
        console.log(this.props)
        const {children, handleClick, isSelected} = this.props
        return (
            <>
               <button className={`btn btn-outline-primary m-2 ${isSelected && 'btn-primary'}`} onClick={handleClick}> {children} </button> 
            </>
        );
    }
}

export default Button;