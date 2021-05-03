import React, { Component } from 'react'
import NavItems from './navItems'

class List extends Component
{
    state = 
    {
        title: this.props.title,
        show: this.props.show
    }

    render = () =>
    {
        switch (this.state.show) {
            case 'navbar':
                return (
                    <ul className="list">
                        {this.state.title ? <li>{this.state.title}</li> : ''}
                        <NavItems />
                    </ul>
                )
        
            default:
            {
                return null
            }
        }
    }
}

export default List