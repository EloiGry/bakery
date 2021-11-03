import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <>
                <h1>
                    List
                </h1>
                <div>
                    {this.props.items.map((item) => 
                     <li> Name : Croissant </li>)}

                    
                </div>
            </>
        );
    }
}

export default List;