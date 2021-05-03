import React, {Component} from 'react'
import NavItems from '../navItems'

class Nav extends Component
{
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