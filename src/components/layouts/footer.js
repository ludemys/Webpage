import React, {Component} from 'react'
import List from '../list'

class Footer extends Component
{
    render = () =>
    {
        return(
            <footer className="footer">
                
                <List title="Sections" show="navbar" />
                <List title="Projects" show="projects" />
                <List title="Contact" show="contact" />

            </footer>
        )
    }
}

export default Footer