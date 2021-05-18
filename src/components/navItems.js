import React, {Component, Fragment} from 'react'
import { Redirect } from 'react-router'

// let path = useHistory()
// path = path.location.pathname

class NavItems extends Component
{
    state = 
    {
        redirect: false
    }

    handleClick = (redirectId) =>
    {
        this.setState({redirect: redirectId})
    }

    render = () =>
    {
        if (this.state.redirect === 1 && window.location.pathname !== '/') {
            return <Redirect push to="/" />
        }
        if (this.state.redirect === 2 && window.location.pathname !== '/me') {
            return <Redirect push to="/me" />
        }
        if (this.state.redirect === 3 && window.location.pathname !== '/portfolio') {
            return <Redirect push to="/portfolio" />
        }
        if (this.state.redirect === 4 && window.location.pathname !== '/goals') {
            return <Redirect push to="/goals" />
        }
        if (this.state.redirect === 5 && window.location.pathname !== '/contact') {
            return <Redirect push to="/contact" />
        }

        return (
            <Fragment>
                <li className='item' key="0"><button onClick={() => this.handleClick(1)} className="link">Home</button></li>
                <li className='item' key="1"><button onClick={() => this.handleClick(2)} className="link">Who I am</button></li>
                <li className='item' key="2"><button onClick={() => this.handleClick(3)} className="link">Portfolio</button></li>
                <li className='item' key="3"><button onClick={() => this.handleClick(4)} className="link">Goals</button></li>
                <li className='item' key="4"><button onClick={() => this.handleClick(5)} className="link">Contact</button></li>
            </Fragment>
        )
    }
}

export default NavItems