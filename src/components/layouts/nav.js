import React, {Component} from 'react'
import NavItems from '../navItems'

class Nav extends Component
{
    setListStyleType = () =>
    {
        return `item ${this.props.styleType ? 'list-style-type-' + this.props.styleType : '' }`
    }
    
    render = () =>
    {
        return(
            <nav className="nav">
                <ul className="list">
                    <NavItems />
                </ul>
            </nav>
        )
    }
}

export default Nav