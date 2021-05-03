import React, { Component } from 'react'
import NavItems from './navItems'

class List extends Component
{
    state = 
    {
        title: this.props.title,
        render: this.props.render
    }

    render = () =>
    {
        switch (this.state.render) {
            case 'navbar':
                return (
                    <ul className="list">
                        {this.state.title ? <li className="item list-header">{this.state.title}</li> : ''}
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