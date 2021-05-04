import React, {Component} from 'react'
import List from '../list'

class Footer extends Component
{
    render = () =>
    {
        return(
            <footer className="footer">
                
                <List title="Sections" render="navbar" />
                <List title="Some projects" render="projects" />
                <List title="Contact" render="contact" />

            </footer>
        )
    }
}

export default Footer