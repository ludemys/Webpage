import React, {Component, Fragment} from 'react'

class NavItems extends Component
{
    render = () =>
    {
        return (
            <Fragment>
                <li className='item'><a href="/" className="link">Home</a></li>
                <li className='item'><a href="/me" className="link">Who I am</a></li>
                <li className='item'><a href="/portfolio" className="link">Portfolio</a></li>
                <li className='item'><a href="/goals" className="link">Goals</a></li>
                <li className='item'><a href="/contact" className="link">Contact</a></li>
            </Fragment>
        )
    }
}

export default NavItems